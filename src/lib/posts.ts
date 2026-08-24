import { getCollection, render, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// render() is the only place remark plugin output (minutesRead, lastModified)
// shows up under the Content Layer API — it never lands in post.data on its
// own. Cache it per post.id so pages that need both the merged data and the
// rendered Content (e.g. the slug page) don't render the same post twice.
const renderCache = new Map<string, ReturnType<typeof render>>();

function renderCached(post: Post) {
  let rendered = renderCache.get(post.id);
  if (!rendered) {
    rendered = render(post);
    renderCache.set(post.id, rendered);
  }
  return rendered;
}

export async function getPosts() {
  const posts = await getCollection('blog');
  for (const post of posts) {
    const { remarkPluginFrontmatter } = await renderCached(post);
    post.data.minutesRead ??= remarkPluginFrontmatter.minutesRead;
    post.data.lastModified ??= remarkPluginFrontmatter.lastModified;
  }
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function renderPost(post: Post) {
  return renderCached(post);
}
