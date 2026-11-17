---
title: "Attention"
description: "The transformer mechanism that lets each token draw information from earlier tokens. It's how context gets used."
---

In each transformer layer, every token computes how relevant every earlier token is to it, then mixes in information weighted by that relevance.

> "The trophy didn't fit in the suitcase because **it** was too big."
> Attention is how *it* picks up information from *trophy*.

## Practical consequences
- **Quadratic cost**: naive attention compares every pair of tokens, so cost grows with the square of length. This is why long context is expensive and slow.
- **Cacheable**: earlier tokens' intermediate values (keys and values) can be stored, which gives the [KV Cache](/ai-field-guide/concepts/kv-cache/) and [Prompt Caching](/ai-field-guide/concepts/prompt-caching/).
- **Finite focus**: attention is spread across everything present, so irrelevant material dilutes it. See [Context Rot](/ai-field-guide/concepts/context-rot/).

Related: [Context Window](/ai-field-guide/concepts/context-window/), [Module 1: How LLMs Actually Work](/ai-field-guide/modules/01-how-llms-work/).
