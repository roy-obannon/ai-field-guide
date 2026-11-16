---
title: "RL with verifiable rewards"
description: "Reinforcement learning on tasks where success can be checked automatically. The main driver of capability gains since about 2024."
---

The model attempts a task; a program checks the result (did the math answer match? did the tests pass? did the agent finish the task?); successful behavior is reinforced. Often abbreviated **RLVR**.

## Why it matters
- It produced the jump in **math, coding, and agentic** ability, and it underlies reasoning models ([Test-time compute](/ai-field-guide/concepts/test-time-compute/)).
- It scales without human labelers, limited mainly by compute and by how many good, checkable tasks exist.

:::note[Prediction lever]
Capability grows fastest where success is cheap to verify. Domains with fuzzy or slow feedback (strategy, taste, long-term outcomes) are harder. Ask of any domain: *how would you auto-grade it?* See [Open questions](/ai-field-guide/open-questions/).
:::
