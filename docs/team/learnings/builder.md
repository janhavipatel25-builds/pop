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
