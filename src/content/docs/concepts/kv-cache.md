---
title: "KV cache"
description: "Stored intermediate attention values for earlier tokens, reused so they aren't recomputed."
---

During generation, each token's **keys and values** (the parts of [Attention](/ai-field-guide/concepts/attention/) other tokens look at) are saved. The next step only computes the new token and reuses the rest.

The same idea across requests is [Prompt caching](/ai-field-guide/concepts/prompt-caching/): if two calls share an identical prefix, the provider can reuse that prefix's cached values.

Cost: the cache consumes a lot of GPU memory, which is part of why very long contexts are expensive to serve.
