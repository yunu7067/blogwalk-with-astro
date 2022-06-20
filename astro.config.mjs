import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), solid(), tailwind(), sitemap()]
});