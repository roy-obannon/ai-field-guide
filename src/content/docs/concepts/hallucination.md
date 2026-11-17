---
title: "Hallucination"
description: "Fluent, confident output that is false. A consequence of plausibility-driven generation, not a random bug."
---

## Why it happens
1. **No lookup step.** Without tools, the model generates the most plausible continuation from its weights. For rare facts, plausible ≠ true. This is a statistical limit, not only a training flaw: a model that predicts text well will hallucinate facts that appear only once in its training data at a rate close to the share of such facts.[^1]
2. **Incentives reward guessing.** If abstaining scores the same as being wrong, a guess has better expected value. Training and benchmarks that grade answers only as right or wrong therefore teach a model to guess confidently rather than say "I do not know."
3. **Fluency is separate from accuracy.** The writing quality gives no signal about whether the content is true.

## Mitigations
- Grounding: [RAG](/ai-field-guide/concepts/rag/), tools, search, and required citations.
- Training for calibration and abstention ([Post-Training](/ai-field-guide/concepts/post-training/)).
- Verification: tests, a checker model, human review on high-stakes outputs.

:::note[Open]
Can it be eliminated or only engineered around? See [Open Questions](/ai-field-guide/open-questions/).
:::

[^1]: Adam Tauman Kalai and Santosh S. Vempala, ["Calibrated Language Models Must Hallucinate,"](https://arxiv.org/abs/2311.14648) in *Proceedings of the 56th Annual ACM Symposium on Theory of Computing* (ACM, 2024).
