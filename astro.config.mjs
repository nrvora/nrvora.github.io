import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ---------------------------------------------------------------------------
// SEO: `site` must be the FINAL public URL. Change this ONE line when you move
// from GitHub Pages to a custom domain.
//   GitHub Pages (user site):  https://neelvora.github.io
//   Custom domain:             https://neelvora.com
// If you deploy to a PROJECT repo instead (github.com/you/website), also set
// `base: '/website'`. A user site (repo named neelvora.github.io) needs no base.
// ---------------------------------------------------------------------------
export default defineConfig({
  site: 'https://nrvora.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
