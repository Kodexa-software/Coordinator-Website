---
title: Install
description: Install Coordinator with one line, or as a Claude Code plugin.
sidebar:
  order: 2
---

## Clone install

```sh
git clone https://github.com/Kodexa-software/Coordinator.git ~/.coordinator/app && ~/.coordinator/app/install.sh
```

It links two things from the clone:

| Link | Points to |
|---|---|
| `~/.claude/skills/coordinate` | the `/coordinate` skill |
| `~/.local/bin/coord` (or `$COORD_BIN_DIR/coord`) | the `coord` command |

If that `bin` folder isn't on your `PATH`, the script says so. Start a new Claude Code session and type
`/coordinate`.

## Plugin install

In Claude Code:

```text
/plugin marketplace add Kodexa-software/Coordinator
/plugin install coordinator@coordinator
```

Claude Code lists plugin commands with the plugin's name, so it shows as `/coordinator:coordinate`. Typing
`/coordinate` also works.

## Needs

| Tool | For |
|---|---|
| Claude Code CLI (`claude`), recent | the agents |
| Python 3.9+ | `coord` |
| git | worktrees, branches, merges |
| GitHub CLI (`gh`) | the live draft pull request |
| Node.js | before/after screenshots; Playwright is fetched on first use |
