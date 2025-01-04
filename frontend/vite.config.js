import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
     proxy:{ //used for error solving
      '/api': 'http://localhost:3000', //cors error hataya taaki or api ko apna manle and limited hi file aa skti
     },
  },
  plugins: [react()],
})
