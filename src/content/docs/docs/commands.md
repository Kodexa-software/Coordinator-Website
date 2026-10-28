---
title: Commands
description: Everything you can say to Coordinator.
sidebar:
  order: 7
---

Start a run in Claude Code:

```text
/coordinate Add CSV export to the orders table, with the same columns the table shows.
```

The live page opens and Coordinator tells you when the plan is ready. After that:

| You say | What happens |
|---|---|
| `/coordinate <request>` | Start a run |
| `/coordinate plan <goal>` | Plan only: goals, milestones and tasks, saved in the project for a later run |
| `/coordinate status` | Open the live page; one line in chat |
| `/coordinate approve` | Approve the plan; building starts |
| `/coordinate answer T3 <text>` | Answer an agent's question |
| `/coordinate tell T3 <text>` | Send a note to a running agent; it arrives at its next step |
| `/coordinate add <text>` | Change the plan or add work; it goes back through the officer and you |
| `/coordinate pause` / `resume` | Agents write an exact next step and stop / pick up where they stopped |
| `/coordinate run` | Build a plan-only run, today or weeks later |
| `/coordinate shots [note]` | Before/after screenshots (base branch vs run branch) as one PNG, saved in the shots task's folder: `<project>/.coordinator/<run>/tasks/<id>/` |
| `/coordinate accept T3` / `retry T3` / `stop T3` | Settle a task the officer keeps sending back / start it fresh / skip it |
| `/coordinate list` | The coordinators in this project |
| `/coordinate update` | Update Coordinator to the latest version |
| `/coordinate terminate` | End the run: stop every process, remove worktrees and internal files, keep the branch and the knowledge |
| `/coordinate terminate --purge` | The same, and also delete the run's knowledge folder |
| `coord map [areas]` | Build or refresh the [project map](/docs/how-it-works/#the-project-map) in `.coordinator/map/` (terminal) |

Add `--run <name>` when the project has more than one coordinator.

With the clone install, every command also works in a terminal as `coord <command>`, with no model involved.
