---
title: "Post-Training"
description: "Everything after pretraining that turns a document completer into a useful, safe assistant."
---

Main stages (labs vary in order and mix):

1. **Supervised fine-tuning (SFT)**: train on curated assistant conversations. Teaches format and persona.
2. **Preference learning**: RLHF (human comparisons), RLAIF / constitutional approaches (a model judging against written principles). Shapes helpfulness, tone, and refusals.
3. [RL with Verifiable Rewards](/ai-field-guide/concepts/rl-with-verifiable-rewards/): reinforcement on automatically checkable tasks. Now the biggest capability lever.

Post-training is also where [Test-Time Compute](/ai-field-guide/concepts/test-time-compute/) behavior is learned, and where calibration (saying "I don't know") can reduce [Hallucination](/ai-field-guide/concepts/hallucination/).
