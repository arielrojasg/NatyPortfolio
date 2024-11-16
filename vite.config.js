import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue() // Only the Vue plugin
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./public"), // General alias for src
      "@images": path.resolve(__dirname, "./public/img") // Alias for images
    }
  }
})
