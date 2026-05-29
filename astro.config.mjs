import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://www.emy-com.fr',
  trailingSlash: 'never',
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
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
