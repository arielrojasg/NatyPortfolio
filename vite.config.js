import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(async () => {

  return {
    base: '/',
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/assets'),
        '@images': path.resolve(__dirname, './src/assets/img'),
      },
    },
  };
});