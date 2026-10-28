---
title: Introduction
description: What Coordinator is and what you need to run it.
sidebar:
  order: 1
---

Coordinator turns one `/coordinate` request into a small team of Claude Code agents that work in the background.
A planner splits the work, a hallucination officer checks the plan against your words, and you approve it once.
Builders then work in parallel, each in its own git worktree, and every task is reviewed and checked before it is
merged.

You need Claude Code, Python 3.9+, git and a git project to run it in.

- [Install](/docs/install/) it with one line.
- See [how a run works](/docs/how-it-works/).
