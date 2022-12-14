import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@healthy-app': path.resolve(__dirname, './src'),
    },
  },
});
