---
title: "Progressive disclosure"
description: "Keep a cheap pointer in context; load the expensive content only when it's needed."
---

A UI design principle repurposed for [Context engineering](/ai-field-guide/concepts/context-engineering/).

| Where it shows up | Cheap pointer (always loaded) | Expensive content (on demand) |
|---|---|---|
| [Skills](/ai-field-guide/concepts/skills/) | Name + one-line description | Full instructions, scripts |
| [Memory](/ai-field-guide/concepts/memory/) | Index of one-line entries | The memory files |
| [Tools and MCP](/ai-field-guide/concepts/tools-and-mcp/) (tool search) | Tool names | Full schemas |
| [RAG](/ai-field-guide/concepts/rag/) | A retrieval tool | The retrieved passages |

**Why it works:** it beats the [Context window](/ai-field-guide/concepts/context-window/) tradeoff by making most content cost almost nothing until it's relevant.

**Where it fails:** the pointer is all the model sees, so a vague description means the content never gets loaded.

Strong candidate for a standard principle. See [Open questions](/ai-field-guide/open-questions/).
