/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-red': '#C00014',
        'fade-red': '#CA4854',
        'dark-blue': '#161543',
        'light-blue': '#0b3f86',
      },
    },
    animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        
        blob: {
          '0%, 100%': { transform: 'rotate(-25deg)' },
          '50%': { transform: 'rotate(25deg)' },
        }
      },
  },
  plugins: [],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}




