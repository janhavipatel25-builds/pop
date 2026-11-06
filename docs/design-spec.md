# Design spec (stub)

Filled in during Phase 1. Source of truth for the feel will be `pop-prototype.html` once it exists.

## Bubble states
1. **Idle**: no bubble. Menu bar shows minutes left (e.g. `18m`).
2. **Forming**: timer hits 0. Bubble appears over any app and grows.
3. **Full**: bubble reaches full size after the 5s grow. Stays until popped.
4. **Pop**: tap/click the bubble (or Space / Enter / Esc) → pop animation.
5. **Rest prompt**: one prompt, different each time, with a **Start again** button.

## Timings known so far
- Grow: **5 seconds**.
- Everything else: TBD (pop animation, prompt reveal).

## Decided (2026-11-04)
- **Monitor:** the screen you're using (where your mouse / active window is).
- **Position:** centre of that screen.
- **Look direction:** soft and glassy (translucent, iridescent soap-bubble; light and calm). Exact colours and fonts are still to design in Figma.

## Still open
- **Look details:** colours, fonts, bubble style (Figma).
- **Prompt list:** the final rest prompts (task 2).
- **Pop animation and prompt reveal timings:** tune in the prototype.
