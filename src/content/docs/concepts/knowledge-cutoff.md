---
title: "Knowledge Cutoff"
description: "The date after which a model's training data, and so its built-in knowledge, ends."
---

Everything a model knows from its weights stops around its training data cutoff. Anything later (prices, news, your company's data) must come in through the [Context Window](/ai-field-guide/concepts/context-window/): tools, search, [RAG](/ai-field-guide/concepts/rag/), or the user.

:::caution[Common failure]
Models may not reliably know their own cutoff, and may describe the world as of training as though it were current. Systems that care about recency should supply the date and fresh data explicitly.
:::

Related: [Pretraining](/ai-field-guide/concepts/pretraining/).
