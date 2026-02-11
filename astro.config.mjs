import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify({
      edgeMiddleware: true
  }
  ),
  site: 'https://leafy-selkie-cf7404.netlify.app/',
  base: '/website-astro-decap/',
});
