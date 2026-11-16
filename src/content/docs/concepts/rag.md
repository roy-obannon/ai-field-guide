---
title: "RAG"
description: "Retrieval-Augmented Generation: fetch relevant documents and put them in context before the model answers."
---

:::note[Stub]
Full treatment in Module 7 (RAG → adaptive RAG). This note will grow.
:::

The basic pipeline: split documents into chunks → embed them → at query time, retrieve the most relevant chunks → insert them into the [Context window](/ai-field-guide/concepts/context-window/) → generate a grounded answer with citations.

Why it exists: the [Knowledge cutoff](/ai-field-guide/concepts/knowledge-cutoff/), private data, and [Hallucination](/ai-field-guide/concepts/hallucination/) reduction. Why not just use long context? Cost, latency, and [Context rot](/ai-field-guide/concepts/context-rot/).

Coming up: chunking, hybrid search, reranking, contextual retrieval, adaptive RAG (deciding *whether* and *how much* to retrieve), and agentic search.

See also: [Second brain](/ai-field-guide/concepts/second-brain/).
