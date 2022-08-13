import {defineConfig} from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {},
  site: 'https://yunu7067.github.io', // sitemap
  markdown: {
    syntaxHighlight: 'shiki',
  },
  experimental: {
    ssr: false,
  },
  integrations: [solid(), tailwind(), sitemap(), image()],
});
