import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // root: './client',
  plugins: [react()],
  build: {
    outDir: '../server/static',  // Correct output directory
    emptyOutDir: true,  // Clear output directory before building
    chunkSizeWarningLimit: 100000 // Set the chunk size warning limit to 100000 bytes (100 kB)
  },
});
