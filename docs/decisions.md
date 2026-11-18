# Decisions

Date · decision · why

| Date | Decision | Why |
|---|---|---|
| 2026-11-03 | Mac menu-bar app (Tauri) + web demo, not a Chrome extension | An extension can't float the bubble over other apps. |
| 2026-11-03 | Mac-only for V1 | Keep scope small; ship one thing well. |
| 2026-11-03 | Work time: 20, 40 or 60 min; custom durations parked | Fewer choices, simpler V1. |
| 2026-11-03 | The bubble grows over 5s and stays until popped | The reminder should be impossible to forget, but gentle. |
| 2026-11-03 | Rest = a different prompt each time; list written in design phase | Keeps breaks fresh. |
| 2026-11-03 | After rest, tap **Start again**; no auto-restart | You stay in control. |
| 2026-11-03 | Screen sharing accepted for V1 (others may see the bubble) | Not worth solving for V1. |
| 2026-11-03 | You can work around the bubble; clicking its surface pops it | Doesn't block work, still demands a pop. |
| 2026-11-03 | Mac sleeps mid-timer: on wake, ask to reset; otherwise resume | Respects what the person wants. |
| 2026-11-03 | Agent team led by MJ, with a learnings loop and phase retros | Better help over time; Jahnavi stays in charge. |
| 2026-11-04 | Bubble appears on the screen you're using | That's where your eyes are. |
| 2026-11-04 | Bubble forms in the centre of the screen | Hard to ignore; the pop is the product. |
| 2026-11-04 | Look direction: soft and glassy | Fits "calm until it matters". |
| 2026-11-08 | 18 rest prompts approved as the v1 draft (in design-spec.md) | Short, kind, doable; can be tweaked after real use. |
| 2026-11-11 | Replace the single big bubble with a **pour**: at 0, small and medium bubbles pour in from the bottom-left corner and fill about 70% of the screen, then stop | More playful, suits the realistic small/medium bubbles, and leaves gaps to click through. **Supersedes** "the bubble grows over 5s and stays until popped" (2026-11-03). |
| 2026-11-11 | The rest prompt appears after you pop a few bubbles (about 8 to 10, tune in prototype); remaining bubbles float away on **Start again** | Satisfying without hundreds of clicks. **Supersedes** "stays until popped" (2026-11-03). |
| 2026-11-17 | Concept direction: **Pomodoro Garden** (name may change from Pop later). A garden element enters at the end of each work session; the **butterfly** is the first element. Bubble exploration is parked | A richer, calmer idea that can grow (more elements, nature sounds). **Supersedes** the bubble pour (2026-11-11) as the V1 reminder. |
| 2026-11-17 | V1 reminder = the dot-built butterfly (`explorations/butterfly/`), design kept as-is for now | Motion and shape are good enough to build on; refine after V1 |
| 2026-11-17 | Work times stay 20, 40 or 60 min | Unchanged |
| 2026-11-17 | If ignored, the butterfly goes away by itself after 10 minutes | Gentle: a reminder, not a nag |
| 2026-11-17 | Pressing the button makes the butterfly fly away; no auto-restart, the person taps to start again | Calm exit; she stays in control |
| 2026-11-17 | Rest prompts, nature sounds and more garden elements are out of V1 | Keep V1 small |
| 2026-11-18 | Reduced motion: butterfly fly-in and fly-away stay as they are for V1 (calmer flap, no cursor push) | Revisit after V1 |
| 2026-11-18 | Working screen gets no hidden heading in V1 | It is only a timer and two buttons |
| 2026-11-18 | Legibility halo behind the dots: not in the web demo; revisit in the Mac app, where the butterfly floats over any app | The demo sits on a paper-coloured page; red-orange dots get lost on green/orange/red backgrounds |
| 2026-11-18 | "Close for now" button shows a small "space" key-cap to hint the Space key (hidden on touch screens) | Teaches the keyboard shortcut; fits the keyboard-first approach |
