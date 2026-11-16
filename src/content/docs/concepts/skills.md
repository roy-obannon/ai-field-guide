---
title: "Skills"
description: "Packaged procedures whose short description is always visible and whose full instructions load only when the task calls for them."
---

A skill is a folder of instructions (and optionally scripts or reference files). Only its **name and description** sit in context; the model loads the full body when a task matches.

**Why:** you can install dozens of detailed procedures ("how to build a .pptx," "our deploy checklist") at nearly zero context cost. See [Progressive disclosure](/ai-field-guide/concepts/progressive-disclosure/).

## Failure modes
- **Misfiring**: the description is the only trigger, so vague descriptions cause misses or false triggers.
- **Overlap**: two skills claiming the same territory.

Compare: [Rules](/ai-field-guide/concepts/rules/), [Memory](/ai-field-guide/concepts/memory/), [Tools and MCP](/ai-field-guide/concepts/tools-and-mcp/).
