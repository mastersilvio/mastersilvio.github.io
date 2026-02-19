// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import AstroPWA from '@vite-pwa/astro';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import remarkEmoji from 'remark-emoji';
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';

import { SITE } from './site/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  publicDir: 'site/assets',
  integrations: [
    svelte(),
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Sílvio Notes',
        short_name: 'Sílvio Notes',
        description: 'Blog pessoal sobre tecnologia, vida e aprendizado contínuo.',
        theme_color: '#09090b',
        background_color: '#09090b',
        display: 'standalone',
        icons: [
          { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
        navigateFallback: null,
      },
    }),
  ],
  build: {
    inlineStylesheets: 'always',
  },

  markdown: {
    shikiConfig: {
      themes: {
        light: 'min-light',
        dark: 'catppuccin-frappe',
      },
      defaultColor: false,
      wrap: true,
      transformers: [
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff(),
      ],
    },
    remarkPlugins: [remarkEmoji],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          properties: {
            className: ['heading-link'],
            ariaLabel: 'Link to section',
          },
          content: {
            type: 'text',
            value: '#',
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
    ],
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@/config': path.resolve(__dirname, './site/config.ts'),
        '@/site-assets': path.resolve(__dirname, './site/assets'),
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});
