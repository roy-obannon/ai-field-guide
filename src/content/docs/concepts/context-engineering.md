---
title: "Context Engineering"
description: "Deciding what goes into the model's context window, when, and in what form."
---

## Prompt engineering

The beginning and early stages of interacting with LLMs focused on writing the best possible set of instructions for an LLM to follow. Understanding the answer to "how do I best phrase this?" is important for working with AI. Another name for this discipline is **prompt engineering**.

> Prompt engineering refers to methods for writing and organizing LLM instructions for optimal outcomes. . . .[^1]

## Why context engineering: a spicy allegory

One personal endeavor of mine is to learn how to cook — presently, I'm tackling salsa roja. Finding and following a recipe, choosing ingredients, learning how to best prepare them, and tailoring it to my flavor preferences is my target right now: making great salsa that will bring tears of joy to those who try it. I may also settle for tears of reaction to the capsaicin, but I digress.

Now picture that salsa on the menu of a busy restaurant. The LLM is a skilled line cook. It already knows how to chop, roast, and season, much as a model already knows language and reasoning from its training. What it cannot do is leave its station: it works only with what is in front of it.

Prompt engineering is the order ticket. The ticket spells out the exact result the kitchen needs to produce ("salsa roja, extra smoky, no cilantro"), and a vague ticket leads to the wrong dish no matter how talented the cook is.

Context engineering is the *mise en place* (French for "everything in its place"), and the context engineer is the head chef who sets up the station before the ticket arrives. Every part of the station has a counterpart in the model's context window:

- Counter space is limited: the [Context Window](/ai-field-guide/concepts/context-window/) holds only so much, so every ingredient on the station has to earn its place.
- Clutter slows the cook down: a station crowded with ingredients for other dishes invites mistakes, just as irrelevant text degrades a model's answers ([Context Rot](/ai-field-guide/concepts/context-rot/)).
- The walk-in holds everything else: most ingredients stay in storage until an order calls for them, the way skills, memory, and retrieval load information only when it becomes relevant ([Progressive Disclosure](/ai-field-guide/concepts/progressive-disclosure/)).
- House rules stay on the wall: food safety rules apply to every dish, the way [Rules](/ai-field-guide/concepts/rules/) apply to every request.

A great ticket cannot save a cook who is missing an ingredient or buried in clutter. That is why the work shifted from writing better tickets to running a better station.

## Context engineering

> Context engineering refers to the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference, including all the other information that may land there outside of the prompts.[^2]

Context engineering asks and tries to answer two questions: "What does the model need to know?" and "What should the model not see?"

:::note[Leaving things out matters as much as putting them in]
Every token in the context window costs money, adds latency, and competes for the model's attention. Context engineering is as much about what you keep off the station as what you put on it.
:::

Its tools:
- [Rules](/ai-field-guide/concepts/rules/): always-loaded instructions
- [Memory](/ai-field-guide/concepts/memory/): persisted facts, recalled selectively
- [Skills](/ai-field-guide/concepts/skills/): procedures loaded on demand
- [Tools and MCP](/ai-field-guide/concepts/tools-and-mcp/): actions and fresh data
- [RAG](/ai-field-guide/concepts/rag/): retrieval from large corpora
- Compaction and summarization of long histories
- Sub-agents with isolated contexts

Its constraints: [Context Window](/ai-field-guide/concepts/context-window/) size, [Context Rot](/ai-field-guide/concepts/context-rot/), cost, [Prompt Caching](/ai-field-guide/concepts/prompt-caching/) order, and injection risk.

---

## Related

- Core text: [Module 0: Context Is Everything](/ai-field-guide/modules/00-context-is-everything/)
- The station in the allegory: [Context Window](/ai-field-guide/concepts/context-window/), [Context Rot](/ai-field-guide/concepts/context-rot/), [Progressive Disclosure](/ai-field-guide/concepts/progressive-disclosure/), and [Rules](/ai-field-guide/concepts/rules/)

[^1]: Prithvi Rajasekaran et al., ["Effective Context Engineering for AI Agents,"](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents#context-engineering-vs-prompt-engineering) Anthropic, September 29, 2025.
[^2]: Rajasekaran et al., ["Effective Context Engineering for AI Agents."](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents#context-engineering-vs-prompt-engineering) For a formal, research-oriented treatment, see Lingrui Mei et al., ["A Survey of Context Engineering for Large Language Models,"](https://arxiv.org/abs/2507.13334) arXiv preprint, July 17, 2025.
