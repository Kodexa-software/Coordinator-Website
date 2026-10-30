---
title: Configuration
description: Project settings and where Coordinator keeps its files.
sidebar:
  order: 8
---

Settings live in `<project>/.coordinator/config.json`. The planner fills in `gate`, `setup` and `dev` on the first
run if you haven't.

| Key | Default | Meaning |
|---|---|---|
| `check` | `""` | Fast checks builders run before review, for example typecheck and lint of the touched package |
| `gate` | `""` | Commands that prove a change (typecheck, lint, tests, build). The scheduler runs it once after each merge |
| `pre_gate` | `""` | What runs before the gate, for example generating code |
| `gate_cwd` | `"."` | Where the gate runs, relative to the repository root |
| `gate_retries` | `1` | How often a failed gate is re-run before a fix agent starts |
| `sync_base` | `true` | Merge the base branch's new commits into the run branch after each task |
| `setup` | `""` | What a fresh worktree needs first, for example linking dependencies from `$COORD_MAIN` |
| `dev` | `{"command": "", "cwd": ".", "ready_path": "/"}` | Dev server for screenshots; `{port}` is replaced with a free port |
| `max_parallel` | `3` | Builders at once |
| `models` / `efforts` | Opus, high | Per role. Planner and builder: Opus, high. Reviewer: Opus, medium. Officer: Sonnet, medium. Writer and briefer: Sonnet, low. Shooter: Haiku. The planner can set them per task |
| `officer` | `{"plan": "auto", "tasks": false, "max_rounds": 1}` | `"auto"` checks a plan only in full auto or when it has more than three tasks; `"always"` and `"never"` work too |
| `question_minutes` | `10` | Minutes before a question takes its default answer (3 in full auto) |
| `stall_minutes` | `30` | Minutes without progress before an agent is stopped and resumed once |
| `time_box` | `{"S": 20, "M": 40, "L": 60}` | Minutes per task size; builders are nudged to wrap up at 1.5 times it |
| `shots` | widths 1280 and 390, light and dark, `["chromium"]` | Screenshot sizes, themes and browsers |
| `permission_mode` | `"auto"` | Permission mode for background agents |
| `deny` | push, commit, rebase, `reset --hard`, `gh pr`, publish, `sudo`, ... | Commands agents may never run |
| `test_names` / `test_dirs` | common test file and folder patterns | What counts as a test file for the tests guard |
| `gitignore` | `true` | Add `.coordinator/` to the project's `.gitignore` when it isn't there |
| `push` / `pr` | `true` | Push the run branch after every merged task. The draft PR opens when you approve the plan, shows progress while the run works, and gets a written description once every task has merged |
| `base_branch` | the current branch | What the run branch starts from |

## Where things live

| What | Where | After `terminate` |
|---|---|---|
| Project settings | `<project>/.coordinator/config.json` | kept |
| The run's knowledge: `plan.md`, `tasks.json`, and per task `knowledge.md`, `changes.md`, `review.md`, officer reports | `<project>/.coordinator/<run>/` | removed; kept only when terminate saved unfinished work as `wip.patch` |
| Run metrics: time, cost, stages and gates per run | `<project>/.coordinator/metrics.jsonl` | kept, read by `coord stats` |
| Screenshots and other artifacts, listed in the live page's Files tab | `<project>/.coordinator/<run>/tasks/<id>/` | removed with the run's folder |
| Processes, logs, worktrees | `~/.coordinator/runs/<run>/` | removed |
| Run branch | `coord/<run>`, pushed after every merged task, with a draft PR | kept |
| Task branches | `coord-tasks/<run>/<task>` | removed as soon as each task is merged; any left (for example skipped tasks) are removed |

`.coordinator/` is added to the project's `.gitignore` (unless `"gitignore": false`) and its local `.git/info/exclude`,
so it is never committed by accident.
