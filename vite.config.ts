import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ★追加

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ★追加：@をsrcディレクトリに
    },
  },
});
