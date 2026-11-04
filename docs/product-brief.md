# Pop: Product Brief

> A break timer that makes pausing a little joyful.

**Owner:** Jahnavi Patel · **Status:** Phase 0 (scoping) · **Last updated:** Nov 3, 2026

---

## 1. The idea in one line

Pop is a Mac menu-bar timer. After your chosen work time (20, 40 or 60 minutes), a bubble forms on your screen. You pop it, and it gives you a small prompt to rest.

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
3. **Bubble forms:** at 0, a bubble appears on the screen, over any app, and grows for **5 seconds**. (Where it appears is a design decision; see Open questions.)
4. **Pop:** tap the bubble to pop it. **It stays until popped.**
5. **Rest prompt:** the pop reveals **one rest prompt**, different each time. Examples:
   - "Find 5 things that are 20 feet away."
   - "Take a small walk."
   - "Time to hydrate."
6. **Start again:** tap **Start again** when you're ready. No auto-restart.

## 6. Scope

**In V1**
- Mac menu-bar app
- Choice of work time: 20, 40 or 60 min
- A bubble that forms over 5s and stays until popped
- Pop animation + a rotating rest prompt (prompt list to be written)
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
- **Clicks around the bubble:** you can keep working everywhere *around* the bubble. You can't click through it: clicking its surface pops it.
- **Mac sleeps mid-timer:** on wake, Pop asks if you want to reset. If you don't, it resumes.

## 10. Open questions

**Jahnavi to decide**
1. **Multiple monitors:** which screen does the bubble appear on?

**Design phase (Phase 1)**
2. **Rest prompts:** the final list.
3. **Look:** colours, fonts, bubble style (Figma).
4. **Bubble position:** where on the screen the bubble forms.
