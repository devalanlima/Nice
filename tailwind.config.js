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
      },
      backgroundImage:{
        'gradient-1': 'linear-gradient(180deg, rgba(0, 194, 255, 0.00) 0%, #AE97CB 100%)',
        'gradient-2': 'linear-gradient(180deg, rgba(24, 75, 255, 0.00) 0%, #174AFF 100%)',
      },
    },
  },
  plugins: [],
}

