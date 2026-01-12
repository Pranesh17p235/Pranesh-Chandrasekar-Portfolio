
import { defineConfig } from 'vite';

export default defineConfig({
  // Setting base to './' ensures all assets are referenced relatively.
  // This is critical for GitHub Pages if your repo is not at the root domain.
  base: './',
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext'
  },
  server: {
    port: 3000,
    open: true,
  },
});
