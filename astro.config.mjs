import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site (dhandyjoe.github.io): served from the domain root, so no `base`.
// `format: 'file'` keeps the legacy URLs working (/about.html, /contact.html) as redirects.
export default defineConfig({
  site: 'https://dhandyjoe.github.io',
  integrations: [sitemap()],
  build: { format: 'file' },
  redirects: { '/about': '/#about', '/contact': '/#contact' },
});
