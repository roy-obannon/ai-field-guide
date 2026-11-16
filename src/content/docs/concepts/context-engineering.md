---
title: "Context engineering"
description: "The discipline of deciding what goes into the model's context window, when, and in what form."
---

The successor to "prompt engineering." The question changes from *how do I phrase this* to *what does the model need to see, and what should it not see?*

Its tools:
- [Rules](/ai-field-guide/concepts/rules/): always-loaded instructions
- [Memory](/ai-field-guide/concepts/memory/): persisted facts, recalled selectively
- [Skills](/ai-field-guide/concepts/skills/): procedures loaded on demand
- [Tools and MCP](/ai-field-guide/concepts/tools-and-mcp/): actions and fresh data
- [RAG](/ai-field-guide/concepts/rag/): retrieval from large corpora
- Compaction and summarization of long histories
- Sub-agents with isolated contexts

Its constraints: [Context window](/ai-field-guide/concepts/context-window/) size, [Context rot](/ai-field-guide/concepts/context-rot/), cost, [Prompt caching](/ai-field-guide/concepts/prompt-caching/) order, and injection risk.

Core text: [Module 0: Context is everything](/ai-field-guide/modules/00-context-is-everything/).
