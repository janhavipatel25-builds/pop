# Pop: Product Brief

> A break timer that makes pausing a little joyful.

**Owner:** Jahnavi Patel · **Status:** Phase 0 (scoping) · **Last updated:** Nov 11, 2026

---

## 1. The idea in one line

Pop is a Mac menu-bar timer. After your chosen work time (20, 40 or 60 minutes), small and medium bubbles pour in from the bottom-left corner of your screen and fill most of it. You pop a few, and you get a small prompt to rest.

## 2. Why it exists

- **Problem:** People working at screens skip breaks. Timers exist, but they're forgettable or annoying, so people hit snooze.
- **Insight:** The reminder itself can be the fun part. You don't dismiss it, you *play* with it.
- **Origin:** *Pop* was a physical productivity timer that Jahnavi and Abhiram Rajilan designed for the IDHA "Future By Design" competition (2019, awarded). It nudged remote workers to pause by having them interact with bubbles. This is the digital version, built and shipped.

## 3. Who it's for

- **Primary:** People who work long stretches at a Mac and forget to take breaks (starting with Jahnavi).
- **Secondary:** Recruiters and hiring managers, via a web demo they can try in one click.

## 4. Goals

- Bring a small moment of **joy** to a break reminder.
- Actually get people to **look away from the screen**.
- Show **interaction design + motion craft** in a shipped product.
- Teach Jahnavi to build and ship a **desktop app**.

**Not goals (V1):** retention, streaks, stats, accounts.

## 5. The V1 experience

1. **Start:** click the Pop icon in the Mac menu bar → pick **20, 40 or 60 min** → start.
2. **Work:** the menu bar shows the minutes left (e.g. `18m`).
3. **The pour:** at 0, small and medium bubbles pour in from the **bottom-left corner**, over any app. The pour stops at about **70%** of the screen, so there are gaps.
4. **Pop:** tap bubbles to pop them. Pop **about 8 to 10** (to be tuned in the prototype).
5. **Rest prompt:** then **one rest prompt** appears, different each time. Examples:
   - "Find 5 things that are 20 feet away."
   - "Take a small walk."
   - "Time to hydrate."
6. **Start again:** tap **Start again** when you're ready. The leftover bubbles float away. No auto-restart.

## 6. Scope

**In V1**
- Mac menu-bar app
- Choice of work time: 20, 40 or 60 min
- A pour of small and medium bubbles from the bottom-left that fills about 70% of the screen
- Pop animation + a rotating rest prompt after about 8 to 10 pops (prompt list written in `design-spec.md`)
- Tap to start again
- Web demo page (try the bubble in a browser)
- Accessibility basics: keyboard pop (Space / Enter / Esc), respects reduced motion

**Parked (later)**
- Custom durations
- More break interactions (blow bubbles into the mic, breathing bubble, bubble wrap)
- Sound
- Windows / Chrome extension
- Pausing during meetings or focus modes

## 7. Principles

- **Joy, never guilt.** No "you skipped 3 breaks."
- **One moment, done well.** The pop is the product.
- **Calm until it matters.** Quiet while you work, delightful when it's time.
- **You stay in control.** Nothing restarts without you.

## 8. Success (for V1)

- Jahnavi uses it for a full work week and doesn't turn it off.
- The pop feels satisfying (tested with 3–5 people).
- Shipped: a downloadable Mac app, a live web demo, and a README with a GIF.

## 9. Decided

- **Screen sharing:** accepted for V1. If a call is being shared, others may see the bubble.
- **Clicks around the bubbles:** you can keep working in the gaps *between* bubbles. You can't click through a bubble: clicking its surface pops it.
- **Mac sleeps mid-timer:** on wake, Pop asks if you want to reset. If you don't, it resumes.

## 10. Open questions

**Decided 2026-11-04 to 11-11** (see `decisions.md`)
- **Multiple monitors:** the screen you're using.
- **Where bubbles start:** the bottom-left corner.
- **Rest prompts:** v1 list of 18 is in `design-spec.md`.

**Design phase (Phase 1)**
1. **Look:** colours, fonts, bubble style (Figma).
2. **Pour:** speed, bubble sizes and counts, how many pops reveal the prompt (prototype).
