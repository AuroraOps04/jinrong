import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '^/api': {
        rewrite: (path) => path.replace(/\/api/, ''),
        target: 'http://124.221.101.202:8081',
        changeOrigin: true,
      },
    },
  },
});
