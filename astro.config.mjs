// @ts-check
import { defineConfig } from 'astro/config';
import chronowiki from 'chronowiki';

// SITE_URL and BASE_PATH let the same build be served from another address or a sub-path.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://christwiki.org',
  base: process.env.BASE_PATH ?? '/',
  integrations: [chronowiki()],
});
