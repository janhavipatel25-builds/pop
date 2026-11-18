// Automated checks for the Pop web demo (web/index.html).
// Run:  node tests/web-demo.mjs        (from the repo root)
// Needs: Playwright + Google Chrome installed. Finds Playwright via PLAYWRIGHT_PATH,
// normal node_modules, or the local npx cache. Does not change any app file.
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { readdirSync, existsSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);

function loadPlaywright() {
  const tries = [process.env.PLAYWRIGHT_PATH, 'playwright'];
  const npx = path.join(homedir(), '.npm', '_npx');
  if (existsSync(npx)) for (const d of readdirSync(npx)) tries.push(path.join(npx, d, 'node_modules', 'playwright'));
  for (const t of tries) { if (!t) continue; try { return require(t); } catch {} }
  console.error('Playwright not found. Set PLAYWRIGHT_PATH or run: npx playwright --version'); process.exit(2);
}
const { chromium } = loadPlaywright();

const PORT = 8765, BASE = `http://127.0.0.1:${PORT}/web/index.html?fast=1`;
const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], { cwd: root, stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
await sleep(800);

let pass = 0, fail = 0;
const check = (name, ok, detail = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : '  -> ' + detail}`); };

const browser = await chromium.launch({ channel: 'chrome', headless: true });

async function newPage(opts = {}) {
  const ctx = await browser.newContext({ viewport: { width: 1000, height: 700 }, ...opts });
  const page = await ctx.newPage();
  page.errs = [];
  page.on('pageerror', e => page.errs.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') page.errs.push('console: ' + m.text()); });
  await page.goto(BASE);
  return page;
}
const vis = (p, sel) => p.evaluate(s => { const e = document.querySelector(s); return !!e && !e.hidden && e.getClientRects().length > 0; }, sel);
const txt = (p, sel) => p.textContent(sel);
const focusId = p => p.evaluate(() => document.activeElement && document.activeElement.id);
const bstate = p => p.evaluate(() => window.pop.getState());
const waitFor = async (fn, ms = 15000) => { const t = Date.now(); while (Date.now() - t < ms) { if (await fn()) return true; await sleep(100); } return false; };

// Start screen visible AND butterfly gone
const backAtStart = p => waitFor(async () => (await vis(p, '#screen-start')) && (await bstate(p)) === 'idle');

async function toButterfly(p, via = 'skip') {
  if (via === 'skip') await p.click('#btn-skip');
  else { await p.click('#btn-start'); await waitFor(() => vis(p, '#btn-close'), 8000); }
}

// 1. Each duration starts the right countdown
for (const m of [20, 40, 60]) {
  const p = await newPage();
  await p.click(`.choices button[data-min="${m}"]`);
  await p.click('#btn-start');
  check(`${m} min: work screen shows`, await vis(p, '#screen-work') && !(await vis(p, '#screen-start')));
  check(`${m} min: count reads ${m}m`, (await txt(p, '#count')) === `${m}m`, await txt(p, '#count'));
  await sleep(2300);
  const t = parseInt(await txt(p, '#count'));
  check(`${m} min: counts down (fast mode, ~2 s later)`, t === m - 2 || t === m - 3, `got ${t}m`);
  check(`${m} min: Pause button has keyboard focus`, (await focusId(p)) === 'btn-pause');
  await p.context().close();
}

// 2. Pause holds, resume continues
{
  const p = await newPage();
  await p.click('#btn-start'); await sleep(2200);
  await p.click('#btn-pause');
  const a = await txt(p, '#count'); check('pause: button says Resume', (await txt(p, '#btn-pause')) === 'Resume');
  await sleep(2500);
  check('pause: time held for 2.5 s', (await txt(p, '#count')) === a, `${a} -> ${await txt(p, '#count')}`);
  await p.click('#btn-pause');
  check('resume: button says Pause', (await txt(p, '#btn-pause')) === 'Pause');
  await sleep(2300);
  const b = parseInt(await txt(p, '#count'));
  check('resume: counts down again', b < parseInt(a) && b >= parseInt(a) - 3, `${a} -> ${b}m`);
  // 3. Reset
  await p.click('#btn-reset');
  check('reset: start screen shows, work hidden', (await vis(p, '#screen-start')) && !(await vis(p, '#screen-work')));
  check('reset: Start has focus', (await focusId(p)) === 'btn-start');
  check('reset: Start button still says "Start"', (await txt(p, '#btn-start')) === 'Start');
  await sleep(1500);
  check('reset: timer stays stopped (no butterfly)', (await bstate(p)) === 'idle');
  await p.context().close();
}

// 4. Countdown hits 0 (20 min = 20 s) -> butterfly
{
  const p = await newPage();
  await p.click('#btn-start');
  const got = await waitFor(() => vis(p, '#btn-close'), 26000);
  check('countdown to 0: Close for now appears', got);
  check('countdown to 0: butterfly entered', (await bstate(p)) !== 'idle', await bstate(p));
  check('countdown to 0: Close for now focused', (await focusId(p)) === 'btn-close');
  check('countdown to 0: announce says "Time for a break."', (await txt(p, '#announce')) === 'Time for a break.', await txt(p, '#announce'));
  check('countdown to 0: tab title says Break time', (await p.title()).startsWith('Break time'), await p.title());
  check('countdown to 0: work screen hidden', !(await vis(p, '#screen-work')));
  await waitFor(async () => (await bstate(p)) === 'fly', 8000);
  const ink = await p.evaluate(() => { const c = document.getElementById('c'), d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i]) n++; return n; });
  check('countdown to 0: butterfly is drawn on the canvas', ink > 500, `${ink} pixels`);
  await p.context().close();
}

// 5. Skip, then each way to close
const exits = [
  ['Close button', p => p.click('#btn-close')],
  ['Esc', p => p.keyboard.press('Escape')],
  ['Enter (button focused)', p => p.keyboard.press('Enter')],
  ['Space (button focused)', p => p.keyboard.press('Space')],
  ['Enter (nothing focused)', async p => { await p.evaluate(() => document.activeElement.blur()); await p.keyboard.press('Enter'); }],
  ['Space (nothing focused)', async p => { await p.evaluate(() => document.activeElement.blur()); await p.keyboard.press('Space'); }],
];
for (const [name, act] of exits) {
  const p = await newPage();
  await toButterfly(p);
  check(`skip -> [${name}]: butterfly + Close focused + announce`, (await bstate(p)) !== 'idle' && (await vis(p, '#btn-close')) && (await focusId(p)) === 'btn-close' && (await txt(p, '#announce')) === 'Time for a break.');
  await sleep(1500);
  await act(p);
  check(`[${name}]: Close button hides right away`, !(await vis(p, '#btn-close')));
  const ok = await backAtStart(p);
  check(`[${name}]: butterfly leaves, start screen returns`, ok, `state=${await bstate(p)}`);
  check(`[${name}]: "Start again" shown and focused`, (await txt(p, '#btn-start')) === 'Start again' && (await focusId(p)) === 'btn-start', `${await txt(p, '#btn-start')} / focus=${await focusId(p)}`);
  check(`[${name}]: no auto-restart`, await (async () => { await sleep(1500); return (await vis(p, '#screen-start')) && (await bstate(p)) === 'idle'; })());
  check(`[${name}]: no console/page errors`, p.errs.length === 0, p.errs.join(' | '));
  await p.context().close();
}

// 6. Ignored butterfly auto-leaves after 10 min (10 s fast)
{
  const p = await newPage();
  await toButterfly(p);
  const t0 = Date.now();
  await sleep(7000);
  check('auto-leave: still there at 7 s', (await bstate(p)) !== 'idle' && (await vis(p, '#btn-close')));
  const ok = await backAtStart(p);
  const secs = (Date.now() - t0) / 1000;
  check('auto-leave: gone and back at start screen', ok, `after ${secs.toFixed(1)} s`);
  check('auto-leave: not before 10 s', secs >= 10, `${secs.toFixed(1)} s`);
  check('auto-leave: "Start again" focused', (await txt(p, '#btn-start')) === 'Start again' && (await focusId(p)) === 'btn-start');
  check('auto-leave: no console/page errors', p.errs.length === 0, p.errs.join(' | '));
  await p.context().close();
}

// 7. Repeat cycle twice (full timer both times, 20 s each is long: use skip for cycle 2)
{
  const p = await newPage();
  await p.click('.choices button[data-min="20"]'); await p.click('#btn-start');
  await waitFor(() => vis(p, '#btn-close'), 26000);
  await p.click('#btn-close'); let ok = await backAtStart(p);
  check('cycle 1 (real timer): completes', ok);
  await p.click('#btn-start');
  check('cycle 2: Start again begins a countdown', (await vis(p, '#screen-work')) && (await txt(p, '#count')) === '20m', await txt(p, '#count'));
  await waitFor(() => vis(p, '#btn-close'), 26000);
  check('cycle 2: butterfly arrives again', (await bstate(p)) !== 'idle' && (await focusId(p)) === 'btn-close');
  await p.keyboard.press('Escape'); ok = await backAtStart(p);
  check('cycle 2: leaves again, back at start', ok);
  await p.click('#btn-skip');
  check('cycle 3 (skip): butterfly arrives a third time', (await bstate(p)) !== 'idle');
  await p.click('#btn-close'); ok = await backAtStart(p);
  check('cycle 3: leaves again', ok);
  check('repeat: no console/page errors', p.errs.length === 0, p.errs.join(' | '));
  await p.context().close();
}

// 8. Reduced motion
{
  const p = await newPage({ reducedMotion: 'reduce' });
  await toButterfly(p);
  check('reduced motion: butterfly enters, Close focused', (await bstate(p)) !== 'idle' && (await focusId(p)) === 'btn-close');
  await sleep(1500);
  await p.click('#btn-close');
  check('reduced motion: leaves, start screen returns', await backAtStart(p));
  check('reduced motion: "Start again" focused', (await focusId(p)) === 'btn-start');
  check('reduced motion: no console/page errors', p.errs.length === 0, p.errs.join(' | '));
  await p.context().close();
}

// 9. Phone width
{
  const p = await newPage({ viewport: { width: 375, height: 667 } });
  const noScroll = await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth);
  check('phone width: no sideways scroll on start screen', noScroll);
  await toButterfly(p);
  const r = await p.evaluate(() => { const b = document.getElementById('btn-close').getBoundingClientRect(); return b.left >= 0 && b.right <= innerWidth && b.bottom <= innerHeight; });
  check('phone width: Close for now fully on screen', r);
  await p.click('#btn-close');
  check('phone width: leaves and returns', await backAtStart(p));
  await p.context().close();
}

await browser.close(); server.kill();
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
