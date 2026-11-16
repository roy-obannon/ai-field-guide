---
title: "Context window"
description: "The maximum number of tokens a model can consider at once. Its entire working memory for a call."
---

Everything the model can use right now (instructions, history, documents, tool results, its own output) must fit in the context window, measured in [Tokens](/ai-field-guide/concepts/tokens/).

Bigger windows help, but they don't remove the need to choose:
- **Cost and latency** grow with length (see [Attention](/ai-field-guide/concepts/attention/)).
- **Quality** degrades as the window fills ([Context rot](/ai-field-guide/concepts/context-rot/)).

So the window is scarce in money, time, and focus. That's the premise of [Module 0: Context is everything](/ai-field-guide/modules/00-context-is-everything/) and [Context engineering](/ai-field-guide/concepts/context-engineering/).
