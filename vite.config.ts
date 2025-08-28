import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        members: 'members.html'
      }
    }
  },
  server: {
    open: true
  }
})