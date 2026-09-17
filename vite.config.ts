import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Custom domain (theturf360.com) serves at root, so base is '/'.
  // If you ever remove the custom domain, set this to '/turf2-frm-bp4/'.
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
