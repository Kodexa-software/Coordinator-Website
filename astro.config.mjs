// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// The home page is src/pages/index.astro; the docs are Starlight, under /docs/.
export default defineConfig({
  site: 'https://coordinator.kodexa.workers.dev',
  output: 'static',
  integrations: [
    starlight({
      title: 'Coordinator',
      description: 'Conduct a background team of Claude Code agents from one request.',
      favicon: '/brand/favicon.svg',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: '/brand/fonts/plus-jakarta-sans-latin-wght.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: '',
          },
        },
        { tag: 'link', attrs: { rel: 'stylesheet', href: '/brand/fonts/fonts.css' } },
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Kodexa-software/Coordinator' }],
      sidebar: [{ autogenerate: { directory: 'docs' } }],
      expressiveCode: { styleOverrides: { borderRadius: 'var(--co-radius-md)' } },
      customCss: ['./src/styles/site.css'],
      components: {
        // The logo is inlined so it follows the theme picker, not only the OS.
        SiteTitle: './src/components/site/DocsSiteTitle.astro',
        Footer: './src/components/site/DocsFooter.astro',
      },
    }),
  ],
});
