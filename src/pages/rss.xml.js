import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sorted = posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  return rss({
    title: 'convoluted.io',
    description: 'Field notes on databases, platform engineering, and the deploys that keep you up at night.',
    site: context.site,
    items: sorted.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/writing/${post.id.replace(/\.(md|mdx)$/, '')}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
