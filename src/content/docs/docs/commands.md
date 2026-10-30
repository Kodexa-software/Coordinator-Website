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

Coordinator picks direct, quick or run and says which; name one yourself with `/coordinate quick <request>` or
`/coordinate run <request>`. For a run, the live page opens and Coordinator tells you when the plan is ready. To be away for the whole run, begin the request
with `<full auto>` and the `/coordinate` session decides for you, merges and ends the run
([full auto](/docs/how-it-works/#full-auto)):

```text
/coordinate <full auto> Add CSV export to the orders table, with the same columns the table shows.
```

After that:

| You say | What happens |
|---|---|
| `/coordinate <request>` | Start a run |
| `/coordinate <full auto> <request>` | Start a run in full auto: the `/coordinate` session decides for you, merges and ends it |
| `/coordinate plan <goal>` | Plan only: goals, milestones and tasks, saved in the project for a later run |
| `/coordinate status` | Open the live page; one line in chat, and what's waiting on you |
| `/coordinate approve` | Approve the plan; building starts. On the live page you can answer per question |
| `/coordinate answer T3 <text>` | Answer an agent's question |
| `/coordinate tell T3 <text>` | Send a note to a running agent; it arrives at its next step |
| `/coordinate say <text>` | One message: it answers a waiting question, reaches the task it names, or adds work. The live page has a message box for it |
| `/coordinate add <text>` | Change the plan or add work. Approved work keeps building; only the new tasks wait for your approval |
| `/coordinate auto on` / `auto off` | Turn full auto on or off for the run and its follow-up runs. The live page's switch does the same |
| `/coordinate pause` / `resume` | Agents write an exact next step and stop / pick up where they stopped |
| `/coordinate run` | Build a plan-only run, today or weeks later |
| `/coordinate shots [note]` | Before/after screenshots (base branch vs run branch) as one PNG, saved in the shots task's folder: `<project>/.coordinator/<run>/tasks/<id>/` |
| `/coordinate todo` / `todo done <n>` | Manual steps only you can do, recorded by agents with `coord task todo` / mark one done |
| `/coordinate accept T3` / `retry T3` / `stop T3` | Settle a task, including a gate failure the run didn't cause / start it fresh / skip it |
| `/coordinate stats` | Time, cost, stages and gates of the latest run, also after it ended |
| `/coordinate restart` | Start a new scheduler that adopts the running agents, for example after an update |
| `/coordinate list` | The coordinators in this project |
| `/coordinate update` | Update Coordinator to the latest version, then run the selftest |
| `/coordinate merge` | Squash-merge every pull request of the run and its follow-up runs, then end them all. Only on the first run, once every run has finished |
| `/coordinate terminate` | End the run: stop every process, remove worktrees, and delete the run's folder in `.coordinator/`. The branch with the PR is kept. If unfinished work is saved as `wip.patch`, the folder is kept and terminate says so |
| `coord map [areas]` | Build or refresh the [project map](/docs/how-it-works/#the-project-map) in `.coordinator/map/` (terminal) |

Add `--run <name>` when the project has more than one coordinator.

With the clone install, every command also works in a terminal as `coord <command>`, with no model involved. A few
options are for the terminal only:

| In a terminal | What happens |
|---|---|
| `coord wait [<run>]` | Wait, at no token cost, until the run needs you or ends. `--new` doesn't count what already waits on you |
| `coord -C <repo> <command>` | Run a command for a run in another repo without `cd`, like `git -C`, for example a follow-up run's `status` |
| `coord start --quick` | Start a quick run: one builder, no planner. `--size`, `--model` and `--effort` set its size and model |
| `coord stats --json` | The run metrics as JSON, from `.coordinator/metrics.jsonl` |
| `coord selftest` | Start and resume one tiny agent the way runs do. Runs by itself once per Claude Code version |

Agents' questions never block a run: each carries a default answer, which applies by itself after 10 minutes (3 in
full auto) unless you answer first.
