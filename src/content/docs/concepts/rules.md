---
title: "Rules"
description: "Instructions loaded into every call: system prompts, CLAUDE.md, project rules."
---

**Loaded:** every turn. **Decided by:** developer or user, ahead of time.

Good for constraints that must *always* hold: safety rules, project conventions, persona, output format.

Most rules reach the model through its [System Prompt](/ai-field-guide/concepts/system-prompt/), which the application sends at the start of every request.

## Failure modes
- **Bloat**: every line costs tokens and attention on every call ([Context Rot](/ai-field-guide/concepts/context-rot/)).
- **Conflicts**: contradictory rules get followed unpredictably.
- **Staleness**: rules describing code that has since changed.

Rule of thumb: if it's only *sometimes* relevant, it belongs in [Skills](/ai-field-guide/concepts/skills/) or [Memory](/ai-field-guide/concepts/memory/), not here. Place rules early so they benefit from [Prompt Caching](/ai-field-guide/concepts/prompt-caching/).

Compare: [Memory](/ai-field-guide/concepts/memory/), [Skills](/ai-field-guide/concepts/skills/), [Tools and MCP](/ai-field-guide/concepts/tools-and-mcp/).
