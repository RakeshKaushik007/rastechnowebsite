import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      // keep your other aliases if needed
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',   // ✅ changed from "build" to "dist"
  },
  server: {
    port: 3000,
    open: true,
  },
});
