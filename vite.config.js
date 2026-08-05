import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['icons/favicon.png'],
    manifest: {
      name: '건강 퀘스트', short_name: '건강 퀘스트', description: '건강 습관을 퀘스트처럼 기록하고 성장하는 RPG 습관 앱',
      theme_color: '#efb8c8', background_color: '#fff7ee', display: 'standalone', orientation: 'portrait-primary', lang: 'ko', start_url: '/',
      icons: [
        { src: '/icons/cute-icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icons/cute-icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: '/icons/cute-icon-maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
        { src: '/icons/cute-icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
      ]
    },
    workbox: { globPatterns: ['**/*.{js,css,html,png,jpg,svg,woff2}'], maximumFileSizeToCacheInBytes: 3 * 1024 * 1024, cleanupOutdatedCaches: true, skipWaiting: true, clientsClaim: true, navigateFallback: 'index.html' }
  })]
});
