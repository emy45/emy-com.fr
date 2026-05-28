import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.emy-com.fr',
  trailingSlash: 'never',
  output: 'static',
  adapter: vercel({
    imageService: true,
    webAnalytics: { enabled: false },
  }),
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: [],
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_a',
  },
  compressHTML: true,
  prefetch: {
    defaultStrategy: 'viewport',
  },
});
