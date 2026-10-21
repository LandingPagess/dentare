import { defineConfig } from 'astro/config';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import dentare from './src/data/dentare.json' with { type: 'json' };

export default defineConfig({
  site: process.env.SITE_URL || dentare.seo.siteUrl,
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
  },
});
