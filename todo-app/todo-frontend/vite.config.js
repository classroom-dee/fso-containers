import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js'
  },
  server: {
    // -H 'Host: localhost' not needed anymore (or '--header="Host: localhost"')
    allowedHosts: ['app', 'localhost']
  }
})
