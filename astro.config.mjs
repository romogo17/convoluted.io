// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import { remarkModifiedTime } from './src/plugins/remark-modified-time.mjs';

export default defineConfig({
  site: 'https://convoluted.io',
  integrations: [mdx()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime, remarkModifiedTime],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
