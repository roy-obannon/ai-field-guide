---
title: "Context Rot"
description: "Model performance degrades as context grows, especially for information buried in the middle."
sidebar:
  badge:
    text: Contested
    variant: caution
---

Having information in the window isn't the same as using it well. Observed effects:

- **Lost in the middle**: models recall material near the start and end of a long context better than the middle (a widely cited 2023 finding; newer models have improved but not eliminated it).
- **Distraction**: irrelevant but plausible content pulls answers off course.
- **Degraded instruction-following** as long agent sessions accumulate tool output.

Tagged contested because the *size* of the effect varies a lot by model and task, and it's improving quickly. That it exists at all is well established.

Mitigations: retrieve less but better ([RAG](/ai-field-guide/concepts/rag/)), summarize or compact history, isolate subtasks in separate contexts, and use [Progressive Disclosure](/ai-field-guide/concepts/progressive-disclosure/).
