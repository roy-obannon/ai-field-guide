---
title: "Module 1: How LLMs Actually Work"
description: Tokens, the next-token function, attention, pretraining, post-training, reasoning models, and why hallucination happens.
sidebar:
  label: "1 · How LLMs Actually Work"
  order: 1
---

:::note[In one paragraph]
Text becomes [Tokens](/ai-field-guide/concepts/tokens/). A transformer maps a sequence of tokens to a probability for every possible next token, and generation repeats that one step in a loop ([Autoregressive Generation](/ai-field-guide/concepts/autoregressive-generation/)). [Attention](/ai-field-guide/concepts/attention/) is how tokens use their context. [Pretraining](/ai-field-guide/concepts/pretraining/) on trillions of tokens builds a skilled document completer; [Post-Training](/ai-field-guide/concepts/post-training/) turns it into an assistant, with [RL with Verifiable Rewards](/ai-field-guide/concepts/rl-with-verifiable-rewards/) now the main driver of new capability. [Test-Time Compute](/ai-field-guide/concepts/test-time-compute/) (thinking before answering) is a second scaling knob. [Hallucination](/ai-field-guide/concepts/hallucination/) follows from generating plausible text with no lookup step.
:::

## Part A: How the machine works

### 1. Tokens
The model never sees letters or words, only [Tokens](/ai-field-guide/concepts/tokens/) (~¾ of an English word each). Consequences: pricing and limits are counted in tokens; character-level tasks (counting the r's in "strawberry") are hard; non-English text often costs more.

### 2. One function, called over and over
A single forward pass does: **tokens in → probability for every possible next token out.** To generate, sample one token, append it, repeat. See [Autoregressive Generation](/ai-field-guide/concepts/autoregressive-generation/) and [Sampling and Temperature](/ai-field-guide/concepts/sampling-and-temperature/).

:::caution[The model commits as it goes]
Each emitted token becomes input. A reply that starts with "Yes," has to justify that yes. This is part of why thinking before answering helps ([Test-Time Compute](/ai-field-guide/concepts/test-time-compute/)).
:::

### 3. The transformer and attention
1. **Embeddings**: each token ID becomes a vector.
2. **Layers** (dozens to 100+), each with:
   - [Attention](/ai-field-guide/concepts/attention/): every token looks back at earlier tokens and weighs what matters. ("The trophy didn't fit in the suitcase because **it** was too big": attention is how *it* connects to *trophy*.)
   - **Feed-forward network**: a per-token transformation where much of the stored knowledge appears to live.
3. **Output**: the final vector becomes a probability distribution over the vocabulary.

Parameters are fixed after training. **Nothing said in a conversation changes them.**

| Mechanical fact | Practical consequence |
|---|---|
| Naive attention cost grows **quadratically** with length | Long context is expensive and slow, which drives the long-context vs. [RAG](/ai-field-guide/concepts/rag/) tradeoff |
| Earlier computations can be cached ([KV Cache](/ai-field-guide/concepts/kv-cache/)) | [Prompt Caching](/ai-field-guide/concepts/prompt-caching/): put stable content first and changing content last |
| Attention spreads over everything in the window | Irrelevant content dilutes focus ([Context Rot](/ai-field-guide/concepts/context-rot/)) |

## Part B: How training turns the machine into an assistant

### 4. Pretraining: compression into skill
Predicting the next token of physics, law, and code *well* requires internally modeling grammar, facts, and reasoning patterns. The result is a **base model**: a superb document completer, not yet an assistant. Its knowledge ends at the [Knowledge Cutoff](/ai-field-guide/concepts/knowledge-cutoff/). See [Pretraining](/ai-field-guide/concepts/pretraining/).

### 5. Post-training: shaping behavior
- **SFT**: curated example conversations teach format and persona.
- **Preference learning** (RLHF / RLAIF / constitutional methods): shapes helpfulness, tone, and refusals.
- [RL with Verifiable Rewards](/ai-field-guide/concepts/rl-with-verifiable-rewards/): try, get scored automatically, reinforce what worked. **The main capability driver since about 2024**, and why models are strongest where answers can be checked.

See [Post-Training](/ai-field-guide/concepts/post-training/).

### 6. Reasoning models
Thinking tokens give the model more forward passes before it commits, plus a scratchpad it can attend back to. This creates a second scaling knob: **inference compute** alongside training compute. See [Test-Time Compute](/ai-field-guide/concepts/test-time-compute/).

:::caution[Caveat]
Shown reasoning is useful but not guaranteed to faithfully describe how the answer was actually reached. This is contested research territory.
:::

### 7. Why hallucination happens
1. **No lookup**: the model generates the most plausible continuation. For rare facts, it produces something with *the shape of* a right answer.
2. **Training rewards confident guessing**: when "I don't know" scores the same as wrong, guessing wins on expected score.
3. **Fluency is separate from accuracy**: the prose is just as polished when the content is wrong.

Mitigations: grounding ([RAG](/ai-field-guide/concepts/rag/), tools, citations), training for abstention and calibration, and verification loops. Reduced, not eliminated. See [Hallucination](/ai-field-guide/concepts/hallucination/).

## Misconceptions to correct when teaching

| People say | The precise version |
|---|---|
| "It's just autocomplete" | The objective is next-token prediction, and doing it well at scale requires learned structure. "Just" misleads in both directions. |
| "It looks things up" | Only with a tool (search, [RAG](/ai-field-guide/concepts/rag/)). Otherwise it's generating from weights. |
| "It learns from our chats" | Weights don't change mid-conversation. Memory features are context management ([Memory](/ai-field-guide/concepts/memory/)). |
| "Bigger = always better" | [Post-Training](/ai-field-guide/concepts/post-training/) and [Test-Time Compute](/ai-field-guide/concepts/test-time-compute/) now matter as much as size. |
| "It reasons like a person" / "It doesn't reason at all" | Both overclaim. It's a different mechanism producing reasoning-shaped behavior, reliable in some domains and brittle in others. |

## Exercise
→ [Exercise 1: Module 1 Teach-Back](/ai-field-guide/exercises/01-module-1-teach-back/)
