import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../../shared'),
    },
  },
  build: {
    outDir: '../public/js',
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/islands/index.tsx'),
      name: 'Islands',
      fileName: () => 'islands.js',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        // Ensure everything is bundled into one file
        inlineDynamicImports: true,
      },
    },
  },
});
