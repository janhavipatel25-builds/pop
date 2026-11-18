# Builder — learnings
Read before every task. Append after every task.

## Rules promoted from retros
- (none yet)

## Log
- YYYY-MM-DD · <task> · <what worked / what went wrong / Jahnavi's feedback>
- 2026-11-17 · Web demo task 1 (butterfly wrapper) · Copying the prototype and wrapping it (start/stop + transparent canvas) kept physics untouched; make start/stop idempotent with a `running` flag so there is never a double loop.
- 2026-11-17 · Web demo task 1 · No browser available to the Builder, so only a syntax check was done; Jahnavi must click-test visually.
- 2026-11-17 · Web demo task 6 (leave state) · A new flight state fits best as its own steer branch plus guards on the shared rules (random kicks, turn-back-from-edges); steering stays separate from `om`.
- 2026-11-17 · Web demo task 6 · Still no browser: syntax check only. Shared finish function (`finishLeave`) keeps the callback list and the instant stop in one place.
- 2026-11-17 · Web demo tasks 2-4 (start screen, countdown, time's up) · A second `<script>` block that only uses `window.pop` kept the butterfly code untouched; timer uses `endAt` timestamps so background tabs do not drift.
- 2026-11-17 · Web demo tasks 2-4 · White text on the red-orange ink is only about 4.3:1, so it is used only for large bold text; no browser again, so syntax check only.
- 2026-11-17 · Web demo tasks 5-7 (Close button, fly away, 10-min auto-leave) · One function (`closeButterfly`) with a `butterflyOut` guard serves button, keys and timeout, so double presses are harmless; the auto-leave compares `Date.now()` in a 500 ms interval so background tabs do not matter. No browser again: syntax check only.
- 2026-11-17 · Web demo task 8 (Skip to the end) · The skip button just calls `onTimeUp`, so the demo path and the real timer share one code path; `onTimeUp` already clears the interval, so no timer needs to be started first.
- 2026-11-17 · Web demo task 8 · No Playwright browser download was needed: `playwright` from the npx cache plus `chromium.launch({channel:'chrome'})` drives the installed Google Chrome. Don't run a bare `cat > file` without a heredoc in a command: it waits for input and hangs.
- 2026-11-18 · Web demo task 9 (accessibility pass) · The big miss was focus: clicking Start or Reset hid the button you were on, so focus fell to the page. Rule: whenever a screen change hides the focused button, move focus to the next sensible one. Check this by logging `document.activeElement` after each click.
- 2026-11-18 · Web demo task 9 · No axe/Lighthouse available without installing, so the audit was manual (Playwright + computed contrast). Reduced-motion still had a small cursor push (scaled, not zero); set it to 0. The canvas `role="img"` label announced a butterfly that wasn't there, so it is now `aria-hidden`.
- 2026-11-18 · Focus ring on Close button · A single white outline vanishes on the light page (about 1.2:1), so a ring needs two tones: white band plus a brown rim via box-shadow. Test both backgrounds by forcing keyboard focus in Playwright and looking at a screenshot.
- 2026-11-18 · Key-cap hint on Close button · Decorative hint goes in an `aria-hidden` span plus `aria-keyshortcuts` on the button, hidden on touch with `@media (hover: none), (pointer: coarse)`; don't start your own http.server on the port the test script uses, it makes the suite hang.
- 2026-11-18 · Reviewer cleanup (dev keys, ?debug bar, held Enter) · A guard that only returns early does NOT stop a held Enter: the browser fires a native click on every repeated keydown of a focused button, so it closed the butterfly and then pressed Start. The fix is `e.preventDefault()` on repeat Enter/Space; always prove such a guard with a real Playwright hold (`keyboard.down` several times).
