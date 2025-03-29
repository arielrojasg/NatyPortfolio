import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(async () => {
  const { default: prerender } = await import('vite-plugin-prerender');

  return {
    base: '/',
    plugins: [
      vue(),
      prerender({
        staticDir: 'dist',
        routes: ['/', '/about', '/services', '/mywork','/enquirenow'], // Add your actual routes here
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './public'),
        '@images': path.resolve(__dirname, './public/img'),
      },
    },
  };
});