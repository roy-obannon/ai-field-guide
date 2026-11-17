---
title: "Module 0: Context Is Everything"
description: The one idea the whole curriculum rests on. A model knows only its weights and its context window.
sidebar:
  label: "0 · Context Is Everything"
  order: 0
---

## The core idea

:::note[The one sentence to remember]
A model has **no memory between calls** and exactly two sources of knowledge: its **weights**, frozen at training, and its **[context window](/ai-field-guide/concepts/context-window/)**, whatever is in front of it right now.
:::

Every "memory," "skill," "rule," "RAG pipeline," and "agent" is a strategy for putting **the right tokens into that window at the right time**, while keeping out the ones that cost money or distract the model. This discipline is called [Context Engineering](/ai-field-guide/concepts/context-engineering/).

## The four design questions

For any piece of information an AI system might use, ask:

1. **What** gets into the window?
2. **When**: always, on a trigger, or on request?
3. **Who decides**: the developer, the user, a retrieval system, or the model itself?
4. **What does it cost**: tokens, latency, diluted attention ([Context Rot](/ai-field-guide/concepts/context-rot/)), and room for prompt injection?

## Applied: rules vs. memory vs. skills vs. tools vs. RAG

| Mechanism | Loaded when | Who decides | Good for | Failure mode |
|---|---|---|---|---|
| [Rules](/ai-field-guide/concepts/rules/) (system prompt, CLAUDE.md) | Every turn | Developer or user, ahead of time | Rules that must always hold, project conventions | Bloat; conflicting rules followed unpredictably |
| [Memory](/ai-field-guide/concepts/memory/) | An index always; details when relevant | The model writes it; retrieval or the model recalls it | Facts that build up over time | Going stale, wrong facts persisting, recalling the wrong thing |
| [Skills](/ai-field-guide/concepts/skills/) | A one-line description always; full body on demand | The model, triggered by the task | Long procedures needed only sometimes | Not triggering, or triggering wrongly; the description is all the model sees |
| [Tools and MCP](/ai-field-guide/concepts/tools-and-mcp/) | The definition always; results when called | The model, at run time | Actions and fresh data | Too many tools confuse selection; results can carry injected instructions |
| [RAG](/ai-field-guide/concepts/rag/) | Each query | The pipeline, or the model in agentic RAG | Large knowledge bases | Retrieving the wrong passages and stating them confidently |

## The pattern underneath: progressive disclosure

Skills, memory indexes, and tool search all share one structure: keep a **cheap pointer** in context and load the **expensive content** only when needed. See [Progressive Disclosure](/ai-field-guide/concepts/progressive-disclosure/). It's one of the strongest candidates for a principle worth standardizing on.

:::note[Live specimen]
When Claude saved my learning goal to memory, it wrote **one fact to one file** plus a **one-line pointer in an index**. The index loads every session; the file loads only when relevant. That's progressive disclosure applied to memory.
:::

## Why it's true mechanically

Covered in [Module 1: How LLMs Actually Work](/ai-field-guide/modules/01-how-llms-work/): weights don't change during a conversation, [Attention](/ai-field-guide/concepts/attention/) spreads across everything in the window, and long contexts degrade recall. So the window is scarce in money, in latency, *and* in focus.

## Exercise

→ [Exercise 0: Why Not Put Everything in the System Prompt?](/ai-field-guide/exercises/00-system-prompt/)
