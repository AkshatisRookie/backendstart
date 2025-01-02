import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
     proxy:{
      '/api': 'http://localhost:3000', //cors error hataya taaki /api ko apna manle
     },
  },
  plugins: [react()],
})
