import {defineConfig} from 'astro/config';
import {astroImageTools} from 'astro-imagetools';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    
  },
  site: 'https://yunu7067.github.io', // sitemap
  experimental: {
    integrations: true
  },
  integrations: [solid(), tailwind(), astroImageTools],
});
