# Tester — learnings
Read before every task. Append after every task.

## Rules promoted from retros
- (none yet)

## Log
- YYYY-MM-DD · <task> · <what worked / what went wrong / Jahnavi's feedback>
- 2026-11-18 · Task 10 web demo tests · Playwright was not installed in the repo but lives in the npx cache; the script finds it, so no install or package.json was needed. A real-clock `endAt` plus `?fast=1` made timer tests reliable. Use `getClientRects().length`, not `offsetParent`, for fixed elements.
- 2026-11-18 · Task 10 · Test Enter/Space two ways (button focused vs nothing focused); they hit different code paths. Check the canvas has pixels to prove the butterfly is actually drawn, not just that state says so.
