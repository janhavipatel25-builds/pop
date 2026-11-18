# Plan: ship the web demo today (Pomodoro Garden, V1 butterfly)

Status: **DRAFT. Nothing starts until Jahnavi approves.**
Date: 2026-11-17. Today's ship = web demo on GitHub Pages. Mac app (Tauri) comes after.

## (a) Approach and the one decision

**Recommended: plain HTML/JS, no installs.** Extend the butterfly prototype into one `index.html`.

| | Plain HTML/JS | React + Vite + Tailwind |
|---|---|---|
| Installs | None | Node packages (needs your OK) |
| Time to ship | Hours | Most of the day just to set up and port the canvas code |
| Fits the prototype | It already is plain HTML + canvas | Needs a rewrite into components |
| Later Mac app | Tauri can load a plain HTML page too | Nicer if the UI grows a lot |
| Risk today | Low | Medium |

- Why plain wins today: the butterfly is a canvas drawing. React adds nothing to it. The UI is only 3 screens.
- We can move to React later if the UI grows. Nothing is lost.

**DECISION FOR JAHNAVI (1): plain HTML/JS for today, revisit React before the Mac app?** Yes / No.
(This also settles the "to confirm" line in CLAUDE.md.)

**Where it lives:** `web/index.html` on branch `feature/web-demo`. The prototype stays untouched in `explorations/`.

**How it gets published (needs your approval at each step):**
- GitHub Pages can only serve from the root of a branch, or from `/docs`.
- `/docs` is our notes folder, so use the **root**: the release copies `web/index.html` to a root `index.html` on `main`.
- Then in GitHub: repo Settings > Pages > Source = "Deploy from a branch" > `main` > `/ (root)`.
- URL will be `https://janhavipatel25-builds.github.io/pop/`.
- Needs your approval: pushing, opening PRs, merging `develop` to `main`, and turning on Pages.

## (b) Task list (each = one commit or less)

Order matters. Each task is on its own short branch off `develop` (or stacked on `feature/web-demo` if you prefer fewer PRs today; see Q3).

| # | Task | Owner | Done when | Size |
|---|---|---|---|---|
| 0 | Park the exploration files: commit `explorations/` and the doc edits on a proper branch (they are untracked on the wrong branch now) | You (git) + MJ gives commands | `develop` has the prototype; clean `git status` | XS |
| 1 | Copy prototype to `web/index.html`; wrap it so the butterfly can be started and stopped by code (`startButterfly()`, `stopButterfly()`), not auto-run | Builder | Page opens; calling start shows the butterfly as before | S |
| 2 | Start screen: 20 / 40 / 60 pick (default 20) + Start button | Builder | Pick a time, press Start, screen changes to Working | S |
| 3 | Working screen: countdown in menu-bar style ("18m", then seconds in last minute), Pause/Resume, Reset | Builder | Time ticks correctly; pause holds; reset goes to Start screen. Timer uses real clock time, so a background tab does not drift | M |
| 4 | Hook timer to butterfly: at 0 it flies in from a corner, flutters, lands, rests, takes off, repeats; overlays the page | Builder | Countdown reaching 0 starts the butterfly over the page | S |
| 5 | The "Close for now" button (working title), always visible, large, readable on any background; Space/Enter and Esc work; focus moves to it when time is up | Builder | Keyboard-only run works; button has visible focus ring | M |
| 6 | New **leave** state: butterfly flies off-screen (faster than arrival), then returns to Start screen (the "Start again" moment). No auto-restart | Builder | Press button: butterfly exits, Start screen shows, nothing restarts by itself | M (the riskiest task) |
| 7 | 10-minute auto-leave if ignored (reuses leave state) | Builder | Test with a CFG override (e.g. 10 seconds) and see it leave; real value stays 10 min | XS |
| 8 | Demo helpers: "Skip to the end" button + one-line explainer ("Normally this waits 20-60 min. Skip ahead to meet the butterfly.") | Builder | Click skip: butterfly arrives at once | S |
| 9 | Accessibility pass: reduced-motion version (calm, slow, mostly still), `aria-live` announcement "Time for a break" at 0, contrast check on text and button | Builder, then Tester | Reduced-motion on = no fast flapping; screen reader announces; contrast passes | M |
| 10 | Automated tests for timer logic (20/40/60, pause, reset, skip, 10-min leave) + a manual checklist in `docs/test-plan.md` | Tester | Tests run and pass; checklist exists | M |
| 11 | Design QA: compare feel to the prototype (arrival, landing, leave) and check button and countdown against the spec | Design QA | Written list of differences; blockers fixed | S |
| 12 | Review the branch | Reviewer | Read-only review; blockers fixed | S |
| 13 | **You commit and merge** to `develop`. Then release: `develop` to `main`, copy to root `index.html`, enable Pages | You (with approvals) | Demo URL loads on your phone/laptop | S |
| 14 | Write-up: README link and screenshot/GIF, release notes, update `decisions.md`, `product-brief.md` and `progress.md` to the garden/butterfly flow, tag `v0.1.0` (web demo) | Shipper | Docs match what shipped | S |

Builder explains each task after building (what + why, one line per new idea). Each agent appends to its learnings file.

## (c) Ship-today cut line

**Must-have (the demo is not shippable without these): tasks 0-8, plus these bits of 9:** `aria-live` announcement, keyboard (Space/Enter/Esc), reduced-motion flag that simply slows the butterfly. Plus tasks 12 (review) and 13 (publish).

**Nice-to-have if time runs short (ship without them, add next):**
- Full reduced-motion polish (task 9, beyond the basics)
- Automated tests (task 10); do the manual checklist only
- Design QA written pass (task 11); you eyeball it instead
- Shipper write-up (task 14): do a 3-line README link only; the rest tomorrow

**Rule if we run late:** cut from the bottom. Never cut keyboard access or the leave animation.

## (d) Risks and open questions

**Risks**
- **Leave state (task 6)** is new motion code. Mitigation: simple version first (steer to nearest edge, speed up, go), polish later.
- **Prototype feel unverified by eye** (progress notes say agents only saw stills). Mitigation: you test in the browser after tasks 4 and 6.
- **Throwaway timers:** browsers slow background tabs. Mitigation: timer based on end-time, not counting ticks.
- **Full-screen canvas covers the button** or blocks clicks. Mitigation: button sits above the canvas; canvas ignores clicks.
- **Cursor push** was never re-tested on v2. Out of scope today; leave it as is, test only that it does not break.
- **Pages publish steps** need your account and approval; allow 10 minutes. First deploys can take a few minutes to appear.
- **Docs are out of date** (brief and decisions still partly describe bubbles). Handled in task 14.

**Questions for Jahnavi (max 3)**
1. Plain HTML/JS for today (recommended), or set up React + Vite now? (the decision above)
2. Button wording: ship with "Close for now" today and change later? Also what should the Start screen button say after the butterfly leaves ("Start again"?).
3. Git on a busy day: one `feature/web-demo` branch with a commit per task and one PR (faster, recommended), or one branch and PR per task (cleaner, slower)?
