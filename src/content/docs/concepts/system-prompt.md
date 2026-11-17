---
title: "System Prompt"
description: "The instructions an application places at the start of every request, shaping how the model behaves throughout a conversation."
---

A **system prompt** is the set of instructions at the very beginning of a model's context window, ahead of anything the user types. It tells the model who it is, what it should and should not do, and how it should respond. Nearly every AI product, from a chat app to a coding agent, runs on one.

A system prompt feels like a special control channel, but mechanically it is ordinary context. It is simply text in front of a window. Before the model reads a conversation, a *chat template* converts every message into a single sequence of tokens and marks each message with a special token for its role:[^1]

```
<|system|> You are a friendly chatbot who always responds in the style of a pirate</s>
<|user|> How many helicopters can a human eat in one sitting?</s>
<|assistant|>
```

During [Post-Training](/ai-field-guide/concepts/post-training/), the model learns to give text after the system marker more authority than text after the user marker. That learned priority is the only thing that separates a system prompt from any other text in the window.

:::note[A system prompt is a strong suggestion, not a lock]
Nothing enforces a system prompt except the model's training. A determined user can sometimes talk a model out of its instructions, and text the model reads later (a web page, an email, a document) can try to override them. This weakness is the root of prompt injection.
:::

## When is it loaded?

The model has no memory between calls ([Module 0: Context Is Everything](/ai-field-guide/modules/00-context-is-everything/)). An application does not set a system prompt once; *it sends the system prompt again at the front of every request*, along with the entirety of the conversation. Two practical consequences follow:

- Every token costs money on every turn: a long system prompt is a charge the application pays again with each message.
- The system prompt is the best candidate for [Prompt Caching](/ai-field-guide/concepts/prompt-caching/): it rarely changes, so it belongs at the very start, where the provider can reuse its cached computation.

:::note[The system prompt travels with every request]
The model never stores a system prompt. The application sends it again, at the front of the context window, every time the model generates a response.
:::

## Who writes it?

A single conversation often carries instructions from several authors, layered into one system prompt:

| Layer | Written by | Example |
|---|---|---|
| Product | The company that ships the app | Anthropic publishes the system prompts behind its Claude apps, which supply details such as the current date at the start of every conversation[^2] |
| Application | A developer building on a model | "You are a support agent for a food delivery app. Only discuss orders and refunds." |
| User | The person using the tool | Custom instructions, project instructions, or a `CLAUDE.md` file, such as the style guide for this site |

System prompts are usually hidden from the user, but hidden does not mean secret. A model will often describe its own instructions when asked. Simon Willison did exactly that with GitHub's Spark app, and he argues that a product's system prompt is often the best manual for using it well.[^3]

## How it relates to rules

[Rules](/ai-field-guide/concepts/rules/) are the instructions that must apply to every request; the system prompt is the main place they live. A `CLAUDE.md` file, for example, holds rules that a coding agent adds to its system prompt at the start of each session.

The same design tension applies to both. Everything in the system prompt competes for the model's attention on every turn ([Context Rot](/ai-field-guide/concepts/context-rot/)), so it should hold only what is always relevant. Anything needed only sometimes belongs in a skill, a memory, or a retrieval step instead ([Progressive Disclosure](/ai-field-guide/concepts/progressive-disclosure/)).

## Writing a good one

The craft of writing system prompts (roles, constraints, examples, and structure) belongs to a later module. One principle follows directly from this page: if an instruction does not need to apply to every turn, it probably does not belong in the system prompt.

---

## Related

- Core text: [Module 0: Context Is Everything](/ai-field-guide/modules/00-context-is-everything/)
- How it works: [Post-Training](/ai-field-guide/concepts/post-training/), [Prompt Caching](/ai-field-guide/concepts/prompt-caching/), and [Context Rot](/ai-field-guide/concepts/context-rot/)
- Closest relative: [Rules](/ai-field-guide/concepts/rules/)
- Alternatives for occasional instructions: [Skills](/ai-field-guide/concepts/skills/), [Memory](/ai-field-guide/concepts/memory/), and [Progressive Disclosure](/ai-field-guide/concepts/progressive-disclosure/)
- Practice: [Exercise 0: Why Not Put Everything in the System Prompt?](/ai-field-guide/exercises/00-system-prompt/)

[^1]: Hugging Face, ["Chat Templates,"](https://huggingface.co/docs/transformers/chat_templating) Transformers Documentation, accessed November 17, 2026. The example comes from this guide.
[^2]: Anthropic, ["System Prompts,"](https://platform.claude.com/docs/en/release-notes/system-prompts/overview) Claude Platform Docs, accessed November 17, 2026.
[^3]: Simon Willison, ["Using GitHub Spark to Reverse Engineer GitHub Spark,"](https://simonwillison.net/2025/Jul/24/github-spark/#reverse-engineering-spark-with-spark) *Simon Willison's Weblog*, July 24, 2025.
