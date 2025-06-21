import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ''
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['www.localhost.com'] // for browserstack
  },
  build: {
    target: 'es2018'
  },
  esbuild: {
    target: 'es2018'
  }
})
