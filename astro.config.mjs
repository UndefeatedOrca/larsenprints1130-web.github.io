import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// Change this to your real domain. No trailing slash.
export default defineConfig({
  site: 'https://lmhale.com',
  integrations: [mdx()],
});