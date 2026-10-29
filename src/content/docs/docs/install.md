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

## Windows

In PowerShell:

```powershell
git clone https://github.com/Kodexa-software/Coordinator.git "$HOME\.coordinator\app"
powershell -ExecutionPolicy Bypass -File "$HOME\.coordinator\app\install.ps1"
```

`install.sh` from Git Bash does the same. The skill link is a junction, so it needs no admin rights or Developer
Mode:

| Link | Points to |
|---|---|
| `~\.claude\skills\coordinate` | the `/coordinate` skill (a junction) |
| `~\.local\bin\coord` and `coord.cmd` (or `$env:COORD_BIN_DIR`) | the `coord` command, for Git Bash and for PowerShell or cmd |

The script adds that `bin` folder to your user `PATH`; open a new terminal (and restart VS Code) to pick it up.
Claude Code runs agents' shell commands in Git Bash, which comes with Git for Windows, and so do the project's
`setup`, `gate` and `dev` commands, so one config works on every OS. If the installer can't find Python, install it
with `winget install Python.Python.3.13`.

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
