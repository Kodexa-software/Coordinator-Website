---
title: How it works
description: The three modes, the run flow, full auto, the roles, the live page, design languages and the project map.
sidebar:
  order: 5
---

## Three modes

`/coordinate` picks the lightest mode that still guards the result, and says which in one line.

- **Direct** is for one coherent change in a few files: a bug fix, a config or copy change, an endpoint. It is built
  in your own session under the same scope rules, at the cost of a plain prompt. A fresh reviewer checks it only in
  risky areas: authentication, permissions, money or stock, migrations, concurrency and security.
- **Quick** (`coord start --quick`) runs the same kind of change in the background: one builder in its own worktree,
  no planner, reviewed, merged and pushed.
- **Run** is the planned team below. Use it for work with parts that can be built side by side, and for one feature
  that spans several areas, such as site, app and API. Measured on such a feature, a planned run produced the
  best-ranked diff for about half the cost of the previous version.

## A run in six steps

1. **Plan.** The planner reads the code your request touches, not the whole repo. It writes `plan.md` and one
   brief per task: dependencies, the files it may change, its size, and the model and effort it needs.
2. **Audit.** In full auto, or when the plan has more than three tasks, the hallucination officer compares the plan
   with everything you have said, once. It looks for invented or missed requirements, oversized answers, padded
   tasks and needlessly serial steps. A must-fix has to name the sentence, file or task it breaks.
3. **Approve.** You approve the plan on the live page or in chat, or say what to change. This is the one stop in
   the run. Asks that belong to another repo become follow-up runs, started in that repo when you approve. The
   draft pull request opens then too.
4. **Build in parallel.** Tasks that don't depend on each other and don't share files run at the same time, each in
   its own worktree. Each builder runs the fast `check`, then its own reviewer, which checks that everything in the
   diff traces to your words, and fixes what it finds. A question an agent asks carries a default, which applies by
   itself after 10 minutes, so no question stalls the run.
5. **Merge.** The scheduler commits, merges into the run branch and runs your full gate once per task, off its main
   loop. A failed gate is re-run once before any fix starts; a fix agent gets the error lines, and each task gets at
   most one fix. A failure the run didn't cause is recorded for you instead of looping. The base branch's new
   commits merge into the run branch after each task, and the branch is pushed. While work goes on, the draft pull
   request shows the goal and what has merged.
6. **Describe.** Once every task has merged, a writer reads the plan, each task's notes and the diff, and writes the
   pull request's description the way a senior engineer would: one short paragraph, one to three lines, on what
   the change does and why. Nothing else.

Merging into your base branch is yours. When you're done reviewing, approve merge all on the live page or in chat:
the pull requests merge in order, then every run ends. The branches with the pull requests are kept; each run's folder in `.coordinator/` is removed.

## Full auto

Off by default. Begin a request with `<full auto>`, or flip the Full auto switch on the live page, and you count as
away. The `/coordinate` session takes your place:

- it approves the plan, taking each question's default unless your words say otherwise;
- it answers the agents' questions, and records anything only you can do as a manual step for later;
- it settles stalemates, retries a stalled task once and restarts a stopped scheduler once;
- when the run is done, it merges every pull request and ends every run.

The agents work exactly as in any other run; only the `/coordinate` session decides, and it tells you in one line
what it decided for you. Anything it can't settle waits for you, and then nothing is merged. Follow-up runs start in
full auto too. Switch it on or off at any time, on the live page or with `/coordinate auto on` or `auto off`. Keep the
`/coordinate` session open: it is the one deciding.

## The roles

| Role | Does |
|---|---|
| Planner | Splits the request into small tasks. Never writes product code |
| Hallucination officer | Checks the plan once against your words, in full auto or for plans of more than three tasks |
| Builder | Builds one task in its own worktree |
| Reviewer | Reviews one task's change with fresh eyes |
| Screenshot taker | Takes before/after screenshots on request |
| Mapper | Builds or refreshes the project map |
| Briefer | Reads big content on a smaller model and writes a short brief, with citations, for the agent that asked |
| Pull request writer | Describes the finished change in the pull request, for its reviewers |
| Scheduler | Plain code, not an agent: schedules, commits, merges, runs the gate, pushes. It adopts running agents after a restart, stops agents that make no progress for 30 minutes, and nudges builders past their time box |

Each agent runs as its own background Claude Code session, except the reviewer and the briefer,
which the agent that needs them starts.

## The live page

A small local page shows each task moving from queued to working, through review, to done, with the run's cost so
far. It also holds the plan with its shape and any other open runs touching the same files, the officer's report,
and each task's brief, changes and review. You approve plans, answer questions and send messages there too. It
runs on `127.0.0.1` only and costs nothing to keep open.

Read each agent's conversation live, and open any file or image in a viewer. The plan shows its short version (the
goal, the tasks, each question with its default), and you approve it with an answer per question. Everything
waiting on you is in one list at the top, and the Full auto switch sits in the top bar.

The Files tab lists every file in the run's folder and in each task's folder: notes, reports, screenshots and
whatever else the agents leave, with images as thumbnails. A click opens the viewer; video, audio, PDFs and HTML pages
open in their own browser tab. Every file can also open in a new tab or show in Finder (Explorer on Windows). Notes and reports link the
files they name, and show the images they embed.

With several pull requests, the header lists them all. When every run has finished, the page asks to merge all with
one Approve, shows each merge as it goes, and offers Try again if one fails.

## Design languages

When a request involves UI, the planner asks which design language to follow: your project's own, Impeccable's
(bundled), or another you name. Every UI task gets it, its reviewer checks against it, and the officer checks the
plan sticks to one.

## The project map

`coord map` builds a small, cited map of your code in `.coordinator/map/`, using the System map method of
Interpretable Context Methodology. Planners read it first instead of exploring the repo on every run, and the
officer checks it before it counts.

Both are built in. Coordinator bundles the parts it uses, with credit and their licences, in its `third_party/`
folder.
