import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/', 
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./public"), // General alias for src
      "@images": path.resolve(__dirname, "./public/img") // Alias for images
    }
  }
})
