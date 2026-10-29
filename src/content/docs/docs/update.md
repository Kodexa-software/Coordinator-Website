---
title: Update
description: Update Coordinator to the latest version.
sidebar:
  order: 3
---

## Clone install

```text
/coordinate update
```

Or, in a terminal:

```sh
coord update
```

Then start a new Claude Code session to load the new version. The links point into the clone, so an update is a
`git pull` there; `coord update` also re-runs the installer, which refreshes them.

## Plugin install

```sh
claude plugin marketplace update coordinator && claude plugin update coordinator@coordinator
```
