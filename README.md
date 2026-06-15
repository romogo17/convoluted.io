# convoluted.io

Personal engineering blog. Astro 6 · Tailwind v4 · MDX.

## Commands

```sh
pnpm dev        # dev server at localhost:4321
pnpm build      # production build to ./dist
pnpm preview    # preview the build locally
```

## Adding a post

Create `src/content/blog/my-post-slug.mdx`:

```yaml
---
title: "Post title"
description: "One-line summary shown in cards and SEO"
pubDate: 2026-06-15
tags: ["databases", "postgres"]
featured: false   # true pins this as the home hero card
readMinutes: 6
---
```

Prose components available to import in any `.mdx` post:

```mdx
import Callout from '../../components/prose/Callout.astro';
import Terminal from '../../components/prose/Terminal.astro';

<Callout tone="tip">Tip text here.</Callout>
<Terminal filename="config.ini" animate>…code…</Terminal>
```

