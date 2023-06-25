/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        amarelo: '#FBC508',
        branco: '#FFFFFF',
        cinza_escuro: '#363636',
        roxo_escuro: '#2B0955',
        roxo_claro: '#AE97CB',
        roxo: '#7000FF',
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

