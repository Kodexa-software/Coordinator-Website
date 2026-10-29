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
| `gate` | `""` | Commands that prove a change (typecheck, lint, tests, build). Run by builders, and again after each merge |
| `gate_cwd` | `"."` | Where the gate runs, relative to the repository root |
| `setup` | `""` | What a fresh worktree needs first, for example linking dependencies from `$COORD_MAIN` |
| `dev` | `{"command": "", "cwd": ".", "ready_path": "/"}` | Dev server for screenshots; `{port}` is replaced with a free port |
| `max_parallel` | `3` | Builders at once |
| `models` / `efforts` | Opus, high | Per role: `planner`, `builder`, `reviewer`, `officer`, `shooter`, `mapper`, `briefer` (Sonnet, low). The planner can set them per task |
| `officer` | `{"plan": true, "tasks": true, "max_rounds": 3}` | Where the officer checks, and how many rounds before it asks you |
| `permission_mode` | `"auto"` | Permission mode for background agents |
| `deny` | push, commit, rebase, `reset --hard`, `gh pr`, publish, `sudo`, ... | Commands agents may never run |
| `test_names` / `test_dirs` | common test file and folder patterns | What counts as a test file for the tests guard |
| `gitignore` | `true` | Add `.coordinator/` to the project's `.gitignore` when it isn't there |
| `push` / `pr` | `true` | Push the run branch after every merged task. The draft PR opens when you approve the plan, with a status body kept up to date |
| `base_branch` | the current branch | What the run branch starts from |

## Where things live

| What | Where | After `terminate` |
|---|---|---|
| Project settings | `<project>/.coordinator/config.json` | kept |
| The run's knowledge: `plan.md`, `tasks.json`, and per task `knowledge.md`, `changes.md`, `review.md`, officer reports | `<project>/.coordinator/<run>/` | removed; kept only when terminate saved unfinished work as `wip.patch` |
| Screenshots and other artifacts, listed in the live page's Files tab | `<project>/.coordinator/<run>/tasks/<id>/` | removed with the run's folder |
| Processes, logs, worktrees | `~/.coordinator/runs/<run>/` | removed |
| Run branch | `coord/<run>`, pushed after every merged task, with a draft PR | kept |
| Task branches | `coord-tasks/<run>/<task>` | removed as soon as each task is merged; any left (for example skipped tasks) are removed |

`.coordinator/` is added to the project's `.gitignore` (unless `"gitignore": false`) and its local `.git/info/exclude`,
so it is never committed by accident.
