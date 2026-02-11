import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify({
      edgeMiddleware: true
  }
  ),
  site: 'https://mway1.github.io',
  base: '/website-astro-decap/',
});
