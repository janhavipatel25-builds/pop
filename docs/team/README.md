# The Pop team

## How it works
- **MJ = the main Claude session.** MJ talks to Jahnavi, plans with her, and hands tasks to specialists. Specialists can't call each other; MJ coordinates.
- Each specialist is a file in `.claude/agents/<name>.md`.
- Jahnavi decides what we build and how it feels. Agents propose.

## Roster
| Agent | Role |
|---|---|
| **MJ** | Jahnavi's agent + team lead. Routes work, runs retros, keeps `progress.md` current. |
| **Planner** | PM / tech lead. Breaks a phase into small tasks, keeps `docs/plan.md`. No app code. |
| **Builder** | Engineer + teacher. One approved task at a time, explains new concepts. |
| **Tester** | QA. Automated tests, `docs/test-plan.md`. |
| **Design QA** | Design critic. Checks the feel against the prototype, Figma and design spec. |
| **Reviewer** | Code reviewer. Reads the branch before Jahnavi merges. |
| **Shipper** | Docs + release. README, release notes, decisions, tags, GIFs. |

## Flow for one feature
1. Planner proposes tasks → **Jahnavi approves**
2. Builder builds one task and explains it
3. Tester tests → Design QA checks the feel
4. Reviewer reviews → **Jahnavi commits and merges**
5. Each agent that worked updates its learnings
6. End of phase: Shipper writes it up → MJ runs the retro with Jahnavi

**Shortcut:** tiny changes (typo, one-line copy) go straight to Builder. MJ says when it's taking the shortcut.

## The learning loop
Agents don't learn automatically. The written learnings plus Jahnavi's feedback are how they improve.
- **Before** a task: read `docs/team/learnings/<name>.md`.
- **After** a task: append 1–3 dated bullets (what worked, what went wrong, Jahnavi's feedback).
- **End of each phase:** MJ runs a retro with Jahnavi (logged in [`retros.md`](retros.md)). Learnings she approves are promoted into that agent's rules in `.claude/agents/<name>.md`.
