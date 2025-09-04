import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        comingsoon: './comingsoon.html'
      }
    }
  }
})
