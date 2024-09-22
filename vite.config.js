import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/instamode/' : '/',  // Use empty string for local development
  plugins: [react(), svgr()]
})
