import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // in dev il sito è servito da /, in build (deploy su GitHub Pages)
  // dalla sottocartella del repository
  base: command === 'build' ? '/biennio2-20262027-vue/' : '/',
  plugins: [
    vue(),
    tailwindcss()
  ],
}))
