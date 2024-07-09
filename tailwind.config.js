/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      height: {
        'screen': '100vh',
      },
      minHeight: {
        'screen': '100vh',
      },
      backgroundImage:{
        'grad': 'linear-gradient(rgb(255, 255, 255) 0px, rgb(177, 218, 255) 100%)'
      },
      backgroundSize:{
        'custom': 'min(max(100%, 1140px), 1770px) auto'
      },
      width:{
        'custom': 'calc(100% - 13em)',
      },
    },
  },
  plugins: [],
}

