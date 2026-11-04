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

## Open design questions
- **Look:** colours, fonts, bubble style (Figma).
- **Position:** where on the screen the bubble forms.
- **Prompt list:** the final rest prompts.
- **Monitors:** which screen gets the bubble (Jahnavi to decide).
