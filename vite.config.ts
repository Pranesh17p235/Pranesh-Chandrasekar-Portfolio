
import { defineConfig } from 'vite';

export default defineConfig({
  // Ensure the root is the current directory
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Ensure the build target is compatible with modern browsers
    target: 'esnext'
  },
  server: {
    port: 3000,
    open: true,
  },
  // If you are hosting on GitHub Pages (username.github.io/repo-name/), 
  // you might need to set 'base' to your repository name.
  // For Vercel/Netlify at the root of a domain, '/' is correct.
  base: '/',
});
