import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://SamV1ce.github.io',           // ← Change if your username is different
  base: '/samvice',                     // ← Change this to your exact repo name
  integrations: [tailwind()],
});