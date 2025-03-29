import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import prerender from 'vite-plugin-prerender'
import path from 'path'

export default defineConfig({
  base: '/', 
  plugins: [
    vue(),
    prerender({
      staticDir: 'dist',
      routes: ['/', '/about', '/services','/mywork','/enquirenow'], // add your real routes
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./public"), // General alias for src
      "@images": path.resolve(__dirname, "./public/img") // Alias for images
    }
  }
})
