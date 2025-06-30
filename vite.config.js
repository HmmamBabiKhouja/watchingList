import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  base: '/watchingList/', // important for GitHub Pages
  plugins: [react(), svgr()],
  server:{
    port: 3000
  }
})