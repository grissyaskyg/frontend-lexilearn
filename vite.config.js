import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  // Preview configuration used by `vite preview` in production-like environments
  preview: {
    host: '0.0.0.0',
    port: 8080,
    // allow the DigitalOcean app hostnames (add any other hosts you use)
    allowedHosts: [
      'goldfish-app-r2dpu.ondigitalocean.app',
      'orca-app-pfvzr.ondigitalocean.app',
      '*.ondigitalocean.app'
    ]
  }
})
