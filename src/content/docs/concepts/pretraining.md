---
title: "Pretraining"
description: "Training a model from scratch to predict the next token over trillions of tokens. This is where broad knowledge and skill come from."
---

Random weights → billions of next-token predictions → each error slightly adjusts the weights.

Why such a simple objective produces capability: to predict the next token of a proof, a contract, or a codebase *well*, it helps to have modeled the structure that generated it. Pretraining is **compression of the patterns behind text**.

Output: a **base model**, an excellent document completer. Ask it a question and it may continue with more questions. Turning it into an assistant is [Post-training](/ai-field-guide/concepts/post-training/).

Related: [Knowledge cutoff](/ai-field-guide/concepts/knowledge-cutoff/), [Tokens](/ai-field-guide/concepts/tokens/).
