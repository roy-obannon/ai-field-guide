---
title: "Tools and MCP"
description: "Functions the model can call to take actions or fetch fresh data; MCP is the open standard for connecting them."
---

The model emits a structured request ("call `search` with these arguments"); the application runs it and returns the result into context.

**MCP (Model Context Protocol)** standardizes how tools, data sources, and prompts are exposed to models, so one connector works across many AI applications.

## Considerations
- **Selection degrades with too many tools.** Mitigate with tool search or grouping ([Progressive disclosure](/ai-field-guide/concepts/progressive-disclosure/)).
- **Results enter the context**, which is where **prompt injection** comes in: instructions hidden in a web page or email the tool fetched. A largely unsolved security problem. See [Open questions](/ai-field-guide/open-questions/).
- Tool descriptions are prompts; write them as carefully as [Rules](/ai-field-guide/concepts/rules/).

Compare: [Rules](/ai-field-guide/concepts/rules/), [Memory](/ai-field-guide/concepts/memory/), [Skills](/ai-field-guide/concepts/skills/), [RAG](/ai-field-guide/concepts/rag/).
