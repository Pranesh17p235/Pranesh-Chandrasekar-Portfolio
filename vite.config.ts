import { defineConfig } from 'vite';

export default defineConfig({
  // Using './' is the most robust way to ensure assets load correctly 
  // regardless of whether the site is in a subdirectory or root.
  base: './',
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