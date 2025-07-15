import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    strictPort: true,
    host: '0.0.0.0', // <- Important: expose server outside container
    hmr: {
      clientPort: 443, // GitHub Codespaces uses HTTPS
      protocol: 'wss',
      host: 'silver-giggle-jj7q75qjg7pg255rr-3000.app.github.dev' // <- your codespace domain (copy it from browser address bar)
    }
  },
  base: './',
});
