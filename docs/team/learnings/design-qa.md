# Design QA — learnings
Read before every task. Append after every task.

## Rules promoted from retros
- (none yet)

## Log
- YYYY-MM-DD · <task> · <what worked / what went wrong / Jahnavi's feedback>
- 2026-11-18 · Task 11 web demo QA · Worked: diffing the CFG block and engine code against the prototype (`diff` of two files) proves "no drift" faster than eyeballing; testing the page on many body backgrounds with Playwright screenshots + a contrast calc showed exactly where the ink fails. Playwright lives in `~/.npm/_npx/*/node_modules` (see tests/web-demo.mjs for the loader).
- 2026-11-18 · Task 11 · Learned: a one-colour ink vanishes on backgrounds near its own hue (contrast 1.2 to 1.6 on red, orange, green, mid blue-grey) while the button stays fine thanks to its white ring. Focus ring (brown) is weak on dark backgrounds for the fixed Close button. I can't judge motion feel by eye: only report what is measurable.
