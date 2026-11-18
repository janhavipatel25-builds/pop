# Test plan

## Automated tests (web demo)
- File: `tests/web-demo.mjs`. It opens `web/index.html?fast=1` in real Chrome (fast mode: 1 "minute" = 1 second).
- It starts its own tiny local server (`python3 -m http.server`), because browsers block `file://` pages.
- Needs Playwright (a tool that drives a browser) and Google Chrome. Playwright is not in the repo; the script finds the copy in the local npx cache. Nothing is added to the project.

Run (from the repo root; takes about 2 minutes):
```
node tests/web-demo.mjs
```
It prints PASS or FAIL for each check, then a total. Exit code is 1 if anything failed.

What it covers (82 checks):
- 20 / 40 / 60 min each start the right countdown, and count down.
- Pause holds the time; Resume continues; Reset returns to the start screen.
- Countdown reaching 0 and "Skip to the end": butterfly enters and is drawn, "Close for now" is visible and focused, announcer says "Time for a break."
- Close button, Esc, Enter and Space (button focused, and nothing focused) each make the butterfly leave, then "Start again" is shown and focused. No auto-restart.
- Ignored butterfly flies away by itself at the 10-minute limit (10 s in fast mode).
- Three full cycles in a row.
- Reduced motion on; phone width (375 px).
- No console or page errors.

Not covered (needs your eyes): how it feels. See below.

## Manual checklist (Jahnavi, web demo, real browser)
Open the page with a normal local server or the live Pages link. Add `?fast=1` for quick runs.

- [ ] Arrival: butterfly flies in from a corner, smoothly, no jump or flash.
- [ ] Perching: after ~10 s it lands on a side wall, folds its wings, then takes off again.
- [ ] Fly-away: Close for now makes it speed up and leave the nearest edge; the start screen then appears.
- [ ] Moving the mouse near it pushes the dots a little, and nothing breaks.
- [ ] Keyboard only (no mouse): Tab to Start, Enter; Tab to Pause/Reset; at the break, Enter, Space or Esc closes it; "Start again" is already focused.
- [ ] Phone width (resize the window narrow, or open on your phone): nothing runs off the screen; Close for now is easy to tap.
- [ ] Reduced motion on (Mac: System Settings > Accessibility > Display > Reduce motion): butterfly is slower and gentler, the cursor does not push it, and it still arrives and leaves.
- [ ] Background tab: use the real timer (no `?fast`), pick 20 min, start, switch to another tab for a few minutes; on return the time shown matches the real clock (not behind).
- [ ] Background tab: if the 10-min auto-leave fires while the tab is hidden, the start screen appears when you return to the tab (fly-away finishes on the next animation frame).
- [ ] Leave the butterfly alone for 10 real minutes: it flies away on its own.
- [ ] Screen reader (VoiceOver, Cmd+F5) hears "Time for a break." when the butterfly arrives.

## Manual Mac app checklist (later, Tauri app)
Run on a real Mac before each release.

- [ ] The laptop sleeps mid-timer: the reset/resume prompt appears
- [ ] A full-screen app is open (e.g. a presentation)
- [ ] Two monitors (behaviour TBD)
- [ ] Do Not Disturb / Focus on
- [ ] Reduced motion on
- [ ] Keyboard-only close (Space / Enter / Esc)
- [ ] Clicking around the butterfly works
