/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-hat': "url('/bg-hat.png')",
        'bg-photo': "url('/bg-photo.png')",
      },
      spacing: {
        'icon': '23px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      boxShadow: {
        'full': '0 0px 5px 1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

