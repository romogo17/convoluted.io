# CLAUDE.md

## Design system

The brand tokens (colors, typography, radii, shadows, motion) come from a claude.ai design project:
**Project ID:** `8ac11c35-45aa-49f2-95fc-bfcc2c767831`

These are embedded directly into `src/styles/global.css` as CSS custom properties — there is no npm package. To pull a design update, use `DesignSync` with the project ID above and re-apply relevant token changes to that file.

## Non-obvious decisions

- **`/writing/` not `/blog/`** — matches the "Writing" nav label exactly.
- **Prose components are Astro, not React** — `src/components/prose/` renders at build time (no hydration cost). Only add `client:*` if a component genuinely needs browser interactivity.
- **`minutesRead` and `lastModified` are injected at build time** by remark plugins (`src/plugins/`), not set in frontmatter. Do not add them manually to post front matter.
- **Mailing list is always visible** — subscribe forms in header, hero, and about page are unconditional. Wire up a real provider (Cloudflare Email Workers + KV, or Buttondown/Kit) when ready.

## Writing voice

Posts should follow the design system's editorial register:

- **Perspective:** first-person, practitioner writing to a peer. "I've been paged at 3am" not "one might encounter".
- **Tone:** direct and dry, with occasional wry aside. Never breathless or hype-y.
- **Structure:** open with the real cost of the problem (what breaks, who gets paged), untangle in the middle, close with the one thing worth remembering.
- **Sentences:** short to medium. Vary rhythm. End paragraphs on the point, not the caveat.
- **Vocabulary:** use the domain's own words precisely. Define once if obscure; never define the obvious.
- **Metaphor:** the "untangling" / thread motif lives in the brand — lean into it where natural, not forced.
- **Code snippets:** show only what's needed. Annotate surprising lines in prose, not inline comments.
- **Headers:** sentence case, no trailing punctuation. Max two levels deep in a post.
- **Callouts:** use sparingly — one `tip` or `warning` per section at most. Callout text should be the sentence worth pulling out, not a summary of the paragraph it follows.
