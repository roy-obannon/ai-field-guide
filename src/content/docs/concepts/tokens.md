---
title: "Tokens"
description: "The unit an LLM actually reads and writes: chunks of roughly three-quarters of a word."
---

Text is split into **tokens** before the model sees it. A tokenizer maps each chunk to an integer ID in a fixed vocabulary (typically 100k–200k entries). "Unbelievable" might become `un` · `believ` · `able`.

## Why it matters
- **Cost, limits, and speed are all measured in tokens.** A [Context window](/ai-field-guide/concepts/context-window/) is a token budget.
- **Character-level blind spots.** The model doesn't see letters, so counting letters, reversing strings, and some arithmetic are harder than they look.
- **Uneven languages.** Non-English text often needs more tokens per idea, so it costs more and fills the window faster.

Related: [Autoregressive generation](/ai-field-guide/concepts/autoregressive-generation/), [Attention](/ai-field-guide/concepts/attention/).
