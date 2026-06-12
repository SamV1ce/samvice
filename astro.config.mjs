import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://SamV1ce.github.io',
  base: '/samvice',           // ← This was the main problem
  integrations: [tailwind()],
});
