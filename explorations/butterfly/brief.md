# Butterfly exploration: design brief (draft 1)

Status: **draft for Jahnavi's approval. Nothing is built yet.**
Separate from `explorations/bubble/`. She hasn't chosen between the two.

## The idea
When the timer hits 0, a butterfly made of dots and glyphs flies onto the screen over any app. It stays alive and reacts to the cursor until the person ends it with a button.

## Decided (2026-11-15)
- **Look:** flat ink, one colour, no iridescence. Form comes from dot density and glyph size, not colour (see `inspiration/`).
- **Count:** one butterfly (assumed; say if you want more).
- **Ending:** a button (a call to action). Jahnavi will think of something creative for the wording. Working title: "Close for now".
- **Cursor:** dots near the cursor get nudged away, then settle back. The butterfly feels alive without a hard chase.
- **Ink colour:** red-orange (like the flash sheet).
- **Rest prompts:** paused for now; not part of this exploration yet.
- **Shape:** built with code first (hand-drawn frames can come later).

## Proposed (not yet approved)
- **Arrival:** dots drift in and assemble into the butterfly.
- **Flight:** it drifts around the screen. Wings flap by squashing the shape side-to-side (the flash sheet's bar, dot and solid frames).
- **Edges:** ragged, with stray dots drifting off, like the references.
- **Leaving:** when the button is pressed, the butterfly dissolves into dots.
- **Legibility over any app:** a tiny shadow or second tone behind the dots, so one ink colour works on light and dark backgrounds.

## Motion rules (from `emil-design-eng`)
- Shows once every 20 to 60 minutes, so it can have real delight.
- Cursor reaction uses a spring (soft, with momentum), not a stiff ease.
- The button responds instantly: small press scale, about 0.97.
- Leaving is faster than arriving.

## Accessibility rules (from `accessibility`)
- **Reduced motion:** a calm, slow, mostly still butterfly. No chasing.
- **Keyboard:** the button is reachable and activated with Space and Enter. Esc also closes.
- **Screen reader:** announce that it's time for a break (live region).
- **Button target:** large, well above the 24px minimum.
- **Contrast:** the button label and the dots stay readable on any background.
- Cursor reaction is decoration only; nothing needs the mouse.

## Still open
1. **Button wording:** Jahnavi to think of it.
2. **Menu-bar timer and Start again:** unchanged?
3. **Rest prompts:** paused. Decide later where they go.
