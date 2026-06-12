import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://SamV1ce.github.io',
  base: '/samvice',
  vite: {
    plugins: [tailwindcss()],
  },
});
