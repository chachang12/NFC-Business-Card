import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 3000, // Optional: specify a port
  },
})