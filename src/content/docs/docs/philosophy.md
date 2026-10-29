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
planning, building and checking. They script repetitive work and hand big reads to the briefer, to save
tokens.

## Small tasks, one approval

The planner splits your request into small tasks, and the officer audits the plan before you see it. You approve
it once. After that, agents only ask you about decisions that are yours to make.

Agents can't approve, answer, merge or end a run for you. An agent that asks you stops until you answer, and a plan
can't be approved while the officer still checks it. Only [full auto](/docs/how-it-works/#full-auto), which you turn
on, lets your `/coordinate` session decide for you while you're away.

## No tests unless you ask

Tests are off by default, and a hook blocks builders from touching test files. When you ask for tests, the reviewer
and the officer check they are few, short and relevant.

## Senior engineers, almost no comments

Every agent works like a senior engineer: it understands the code before changing or judging it, follows your
project's patterns, makes its own calls, owns the result and writes tight. Its code needs no comments. A comment
appears only where a senior engineer would add one, as a short line on a non-obvious why, and the reviewer flags
anything more. If your project's instructions ask for a comment style, they win.

## Your project's rules first

Every agent loads the instruction files your own Claude Code session would: `CLAUDE.md`, `AGENTS.md`, those of
every folder above, and `.claude/rules`, uncommitted edits included. Where a rule and an agent's role disagree, the
project wins. Conflicts with how Coordinator works are put to you as questions.

## Nothing lands on your base branch

Agents never commit, push or switch branches; the scheduler does. The run branch is pushed after every merged task
with a draft pull request. Pull requests merge into your base branch only when you approve merge all, or when full auto merges them for you. Set
`"push": false` to keep a run local.

## Nothing leaves your machine

Screenshots and other artifacts stay in the task's folder, and the live page's Files tab lists them. Deleting the
run's folder cleans them up.
