---
title: Introduction
description: What Coordinator is and what you need to run it.
sidebar:
  order: 1
---

Coordinator gets one `/coordinate` request done with the least ceremony that still guards the result. It picks
one of three modes and says which:

- **direct**: a small single change is built in your own session under Coordinator's scope rules, at the cost of a
  plain prompt. A fresh reviewer checks it when it touches a risky area: auth, money, migrations or security.
- **quick**: the same change in the background. One builder works in its own worktree, and its change is reviewed,
  merged and pushed while you keep working.
- **run**: work with parts that can be built side by side, or a feature across several areas such as site, app and
  API. A planner splits it, you approve the plan once, and builders work in parallel, each in its own git worktree
  and reviewed before it is merged. In full auto, or for plans of more than three tasks, a hallucination officer
  checks the plan against your words first.

You can name the mode yourself: `/coordinate quick <request>`.

You need Claude Code, Python 3.9+, git and a git project to run it in.

- [Install](/docs/install/) it with one line.
- See [how a run works](/docs/how-it-works/).
