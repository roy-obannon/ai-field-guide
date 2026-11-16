# AI Field Guide

A living curriculum and second brain for understanding, building with, and teaching modern AI: model selection, context engineering, agents, multi-agent systems, RAG, evals, and the open problems ahead.

**Read it:** https://roy-obannon.github.io/ai-field-guide/

## Layout

```
src/content/docs/
├── index.mdx          # home: curriculum map and learning loop
├── modules/           # the ordered course
├── concepts/          # atomic, densely linked notes (one idea each)
├── exercises/         # teach-backs, drills, debates + critiques
└── open-questions.md  # evolving opinions and predictions
```

Mark a contested concept with a sidebar badge:

```yaml
sidebar:
  badge:
    text: Contested
    variant: caution
```

## Working locally

```bash
npm install
npm run dev      # http://localhost:4321/ai-field-guide/
npm run build    # also validates every internal link
```

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.

Built with [Astro Starlight](https://starlight.astro.build).
