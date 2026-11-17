---
title: "Sampling and Temperature"
description: "How a token is chosen from the model's probability distribution, and the knob that controls randomness."
---

The model outputs a probability for every token; **sampling** picks one.

- **Temperature** reshapes the distribution. Low temperature means nearly always the top token: consistent, repetitive. High temperature means broader choices: varied, riskier.
- **Top-p / top-k** cut off the unlikely tail before sampling.

Many reasoning models fix these values, because training tuned them for a specific sampling regime.

:::tip[Teaching point]
Even at temperature 0, outputs aren't always perfectly reproducible in practice (batching and hardware nondeterminism). "Deterministic" is the wrong promise to make.
:::

Related: [Autoregressive Generation](/ai-field-guide/concepts/autoregressive-generation/).
