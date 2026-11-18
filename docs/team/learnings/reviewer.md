# Reviewer — learnings
Read before every task. Append after every task.

## Rules promoted from retros
- (none yet)

## Log
- YYYY-MM-DD · <task> · <what worked / what went wrong / Jahnavi's feedback>
- 2026-11-18 · Task 12 review of feature/web-demo · Worked: running the existing test script (82/82 pass) before reading code, then checking key handlers by tracing `document.activeElement`; also `git ls-files` for public-repo safety (inspiration folders are correctly ignored, no personal paths or secrets).
- 2026-11-18 · Task 12 · Pattern to check next time: prototype dev shortcuts (here R and L keys) left active in the shipped page, and "temporary" debug UI still in the file. Also remember rAF pauses in background tabs, so animation-dependent callbacks (fly-away finishing) wait until the tab is visible.
