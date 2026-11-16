---
title: "Prompt caching"
description: "Reusing computation for an identical prompt prefix across API calls, which cuts cost and latency."
---

Built on the [KV cache](/ai-field-guide/concepts/kv-cache/). If a request starts with the exact same tokens as a recent one, the provider can skip recomputing that prefix and charge much less for it.

## Design rule
:::caution[Stable first, changing last]
Order prompts as: system prompt and [Rules](/ai-field-guide/concepts/rules/) → tool definitions → large reference documents → conversation → the newest message. Any change early in the prefix invalidates everything after it.
:::

This is a case where a hardware-level fact directly shapes [Context engineering](/ai-field-guide/concepts/context-engineering/) practice.
