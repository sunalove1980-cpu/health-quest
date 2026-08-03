import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    includeAssets: ['icons/favicon.png'],
    manifest: {
      name: '건강 퀘스트', short_name: '건강 퀘스트', description: '건강 습관을 퀘스트처럼 기록하고 성장하는 RPG 습관 앱',
      theme_color: '#17112d', background_color: '#0c0920', display: 'standalone', orientation: 'portrait-primary', lang: 'ko', start_url: '/',
      icons: [
        { src: '/icons/cute-icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icons/cute-icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: '/icons/cute-icon-maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
        { src: '/icons/cute-icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
      ]
    },
    workbox: { globPatterns: ['**/*.{js,css,html,png,svg,woff2}'], cleanupOutdatedCaches: true, navigateFallback: 'index.html' }
  })]
});
