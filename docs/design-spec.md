# Design spec (stub)

Filled in during Phase 1. Source of truth for the bubble feel is `explorations/bubble/pop-prototype.html`. A butterfly exploration lives in `explorations/butterfly/`; no choice made yet.

## Bubble states (updated 2026-11-11: the pour)
> Replaces the earlier single-big-bubble idea. Big-bubble Figma frames are kept for reference only.

1. **Idle**: no bubble. Menu bar shows minutes left (e.g. `18m`).
2. **Pour**: timer hits 0. Small and medium bubbles pour in from the **bottom-left corner**, over any app.
3. **Filled**: the pour stops at about **70%** of the screen. Gaps stay clickable.
4. **Pop**: tap/click a bubble (or Space / Enter / Esc) → pop animation. Pop about 8 to 10.
5. **Rest prompt**: one prompt, different each time, with a **Start again** button. Remaining bubbles float away on Start again.

## Timings known so far
- Pour duration, bubble sizes and counts: TBD in the prototype (old 5s grow no longer applies).
- Everything else: TBD (pop animation, prompt reveal).

## Figma
Bubble states (menu bar, forming, full, pop, rest prompt): https://www.figma.com/design/1rfXQob7GLFszrt3aOKpDI

**Draft 3 (2026-11-11), current:** (backgrounds are realistic work scenes: a design tool for the main flow, plus a dark code editor and a document to test the bubble over other apps) draft 1's soft, glassy big bubble and pop, plus the realistic thin-film look for the small bubbles on the rest-prompt slide. Jahnavi felt the realistic big bubble (draft 2) didn't look right. Draft 2 is kept on a separate Figma page, "Draft 2 - realistic (archived)". Photos in `explorations/bubble/inspiration/` guided the small bubbles (clear centre, colour bands at the rim, sharp highlights).

## Decided (2026-11-04)
- **Monitor:** the screen you're using (where your mouse / active window is).
- **Position:** centre of that screen.
- **Look direction:** soft and glassy (translucent, iridescent soap-bubble; light and calm). Exact colours and fonts are still to design in Figma.

## Still open
- **Look details:** colours, fonts, bubble style (Figma).
- **Pop animation and prompt reveal timings:** tune in the prototype.

## Rest prompts (v1 draft, approved 2026-11-08)
Rules: 8 words or fewer, kind and playful (never bossy), doable in under 5 minutes. Shown in a different order each time.

**Eyes**
1. Find 5 things that are 20 feet away.
2. Look out a window for a minute.
3. Soften your eyes and look far away.
4. Blink slowly ten times.

**Body**
5. Take a small walk.
6. Stretch like a cat.
7. Roll your shoulders back, slowly.
8. Stand up and shake out your hands.
9. Reach for the ceiling, then the floor.

**Water and fuel**
10. Time to hydrate.
11. Refill your water, then sip it.
12. Grab a snack that makes you happy.

**Breathing and calm**
13. Take three slow breaths.
14. Unclench your jaw and drop your shoulders.
15. Close your eyes for ten seconds.

**A little delight**
16. Say hi to someone, or something, nearby.
17. Step outside for a breath of fresh air.
18. Look at something green.
