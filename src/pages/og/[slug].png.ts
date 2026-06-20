import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIRoute, GetStaticPaths } from 'astro';
import { renderOgCard } from '../../lib/og';

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: CollectionEntry<'blog'> };
  const png = await renderOgCard(post.data.title, post.data.description);
  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.id.replace(/\.(md|mdx)$/, '') },
    props: { post },
  }));
};
