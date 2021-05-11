import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import { injectManifest } from 'rollup-plugin-workbox'
import { resolve } from 'path'

const isProduction = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/calculadora-de-mercado/',
  plugins: [
    svelte(),
    isProduction && injectManifest({
      swSrc: resolve(__dirname, 'dist', 'service-worker.js'),
      swDest: resolve(__dirname, 'dist', 'service-worker.js'),
      globDirectory: 'dist',
      globPatterns: [
        '**/*.{js,css}',
        '**/*.{png,jpg,jpeg,webp,ico,svg}'
      ]
    })
  ],
  build: {
  },
})
