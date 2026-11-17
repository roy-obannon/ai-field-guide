---
title: "Hallucination"
description: "Fluent, confident output that is false. A consequence of plausibility-driven generation, not a random bug."
---

## Why it happens
1. **No lookup step.** Without tools, the model generates the most plausible continuation from its weights. For rare facts, plausible ≠ true.
2. **Incentives reward guessing.** If abstaining scores the same as being wrong, a guess has better expected value. Recent research (notably a 2025 OpenAI paper) argues this is a central cause.
3. **Fluency is separate from accuracy.** The writing quality gives no signal about whether the content is true.

## Mitigations
- Grounding: [RAG](/ai-field-guide/concepts/rag/), tools, search, and required citations.
- Training for calibration and abstention ([Post-Training](/ai-field-guide/concepts/post-training/)).
- Verification: tests, a checker model, human review on high-stakes outputs.

:::note[Open]
Can it be eliminated or only engineered around? See [Open Questions](/ai-field-guide/open-questions/).
:::
