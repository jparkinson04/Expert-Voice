import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://expertvoice.co.uk',
  integrations: [sitemap()],
  server: {
    host: true,
  },
});
