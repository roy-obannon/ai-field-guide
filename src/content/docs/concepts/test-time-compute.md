---
title: "Test-time compute"
description: "Spending more computation at inference, mainly by letting the model think before answering, to get better answers."
---

Each token gets a fixed amount of computation. A reasoning model writes thinking tokens first, which gives it:
- **more forward passes** before it commits ([Autoregressive generation](/ai-field-guide/concepts/autoregressive-generation/)),
- **a scratchpad** it can attend back to, so it can try an approach, notice an error, and backtrack.

Trained via [RL with verifiable rewards](/ai-field-guide/concepts/rl-with-verifiable-rewards/).

## Two scaling knobs
| Knob | What you pay for |
|---|---|
| Training compute | Bigger or better-trained model |
| Inference compute | Thinking longer per problem ("effort" or "thinking budget") |

A smaller model thinking longer can beat a bigger model answering instantly, which is central to model selection.

:::caution[Contested]
Whether shown reasoning faithfully reflects the model's actual computation is an open research question.
:::
