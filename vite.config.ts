import { defineConfig } from 'vite';

export default defineConfig({
  // This matches your URL: https://pranesh17p235.github.io/Pranesh-Chandrasekar/
  base: '/Pranesh-Chandrasekar/',
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true,
  },
});