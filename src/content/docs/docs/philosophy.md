---
title: Philosophy
description: How Coordinator works with you.
sidebar:
  order: 6
---

## Your words are the spec

Your request, every later addition and every answer are kept word for word. The planner and the officer judge the
work against all of them.

## The conductor never plays

Scheduling, merging, the gate and the live page are plain code and cost no tokens. Agents spend tokens only on
planning, building and checking.

## Small tasks, one approval

The planner splits your request into small tasks, and the officer audits the plan before you see it. You approve
it once. After that, agents only ask you about decisions that are yours to make.

## No tests unless you ask

Tests are off by default, and a hook blocks builders from touching test files. When you ask for tests, the reviewer
and the officer check they are few, short and relevant.

## Your project's rules first

Every agent loads the instruction files your own Claude Code session would: `CLAUDE.md`, `AGENTS.md`, those of
every folder above, and `.claude/rules`, uncommitted edits included. Where a rule and an agent's role disagree, the
project wins. Conflicts with how Coordinator works are put to you as questions.

## Nothing lands on your base branch

Agents never commit, push or switch branches; the scheduler does. The run branch is pushed after every merged task
with a draft pull request. Nothing is merged into your base branch for you. Set `"push": false` to keep a run
local.
