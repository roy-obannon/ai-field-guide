---
title: "Memory"
description: "Information an AI system persists across sessions and re-inserts into context when relevant."
---

The model has no memory of its own ([Module 0: Context Is Everything](/ai-field-guide/modules/00-context-is-everything/)). "Memory" is a [Context Engineering](/ai-field-guide/concepts/context-engineering/) feature: text gets **written** somewhere and **re-inserted** later.

**Typical design:** a short always-loaded index plus detail files loaded when relevant ([Progressive Disclosure](/ai-field-guide/concepts/progressive-disclosure/)).

## Design questions
- **Write policy**: who decides what's worth saving? Saving too much creates noise; too little and it forgets.
- **Recall policy**: index lookup, embedding search ([RAG](/ai-field-guide/concepts/rag/)), or the model choosing.
- **Maintenance**: memories go stale and need updating or deleting, a problem still mostly unsolved.

Compare: [Rules](/ai-field-guide/concepts/rules/) (always loaded, written by humans) vs. memory (accumulated, often written by the model).
