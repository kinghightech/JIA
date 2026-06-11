import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __VITE_OPENROUTER_API_KEY__: JSON.stringify(process.env.VITE_OPENROUTER_API_KEY || ''),
  },
})
