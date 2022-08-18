import {defineConfig} from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {},
  site: 'https://yunu7067.example.com', // sitemap
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md#theming-with-css-variables
      theme: 'github-dark',
    },
  },
  integrations: [solid(), tailwind(), image(), sitemap()],
});
