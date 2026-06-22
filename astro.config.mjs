// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import { remarkModifiedTime } from './src/plugins/remark-modified-time.mjs';

export default defineConfig({
  site: 'https://convoluted.io',
  integrations: [
    expressiveCode({
      themes: ['catppuccin-mocha'],
    }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime, remarkModifiedTime],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
