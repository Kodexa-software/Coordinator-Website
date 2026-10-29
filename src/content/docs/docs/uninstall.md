---
title: Uninstall
description: Remove Coordinator from your machine.
sidebar:
  order: 4
---

First end any active run: in its project, run `/coordinate terminate` (or `coord terminate` in a terminal).

## Clone install

Remove the two links, then the `~/.coordinator` folder with the clone and its run files:

```sh
rm ~/.local/bin/coord ~/.claude/skills/coordinate
rm -rf ~/.coordinator
```

If you installed with `COORD_BIN_DIR`, remove `$COORD_BIN_DIR/coord` instead of `~/.local/bin/coord`.

On Windows, in PowerShell (removing the junction leaves the clone it points to alone):

```powershell
Remove-Item ~\.local\bin\coord, ~\.local\bin\coord.cmd
(Get-Item ~\.claude\skills\coordinate).Delete()
Remove-Item -Recurse -Force ~\.coordinator
```

## Plugin install

```sh
claude plugin uninstall coordinator@coordinator
claude plugin marketplace remove coordinator
```

Or remove it from `/plugin` in Claude Code.

## Your projects

Each project keeps its `.coordinator/` folder and the `.coordinator/` line in its `.gitignore`. Delete them when you
no longer need them.
