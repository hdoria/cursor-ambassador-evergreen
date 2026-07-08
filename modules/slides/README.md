# Slides Engine (Optional)

This folder contains a reusable slide engine for workshop sessions.

## How to use

1. Create a slide deck file in `modules/slides/content/`.
2. Register it in `modules/slides/content/index.ts`.
3. Set `defaultSlideDeck` (or extend routing for multiple decks).

## Components

- `SlideLayout.tsx` - keyboard and button navigation
- `SlideContent.tsx` - slide content renderer
- `CodeBlock.tsx` - copyable code blocks
- `PromptBlock.tsx` - copyable prompt blocks

Ambassadors can skip this module entirely if they only need the community website pages.
