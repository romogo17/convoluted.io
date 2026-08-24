---
description: Turn a learning artifact into a new blog post for this repo
argument-hint: "[artifact URL or path]"
---

Turn the artifact at $ARGUMENTS into a new blog post for this repo.

Follow CLAUDE.md exactly: the "Adding a post" conventions and the "Writing
voice" section, including the AI-tells checklist and the openings principle.
Match the voice of the existing posts at
src/content/blog/\*.mdx; treat it as the reference for
tone, structure, and how diagrams are built.

This is a rewrite, not a reformat. The artifact is a reference; the post is
an essay. Open on a concrete scene, not an abstract thesis. Put the reader
in the moment, then let the point land. Add the narrative connective tissue
an article needs and the artifact didn't. Have a point of view.

Create src/content/blog/{slug}.mdx with frontmatter: title, description,
pubDate, tags, featured. The description is a real human sentence with a
bit of voice, not a contents list. Do NOT add minutesRead or lastModified
(injected at build time).

Reach for the prose components where they earn their place, not by default:
Callout (sparingly), Expand (optional detail), TokenTable, FlowDiagram for a
concept that reads better as a picture. Build diagrams as hand-authored
inline SVG inside FlowDiagram, reusing the existing gha-\* / token colour
classes so they match the other diagrams. Sentence-case headers, max three
levels deep.

Before you write, ask me: the angle and what to cut, the working title,
tags, and whether this one is featured.

Once you have a draft, load the `humanizer` skill and run it over the
draft to strip AI tells before showing it to me.

When done, run `pnpm build` to confirm it compiles and the diagrams render.
Show me the draft. Don't commit until I say so.
