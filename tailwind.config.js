/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', 
        'xxs': '375px'
        
      },
     
        
        colors: {
         'primary': '#047857',
         
          'secondary': '#FE6100', 

          'em':'#022C22'

          // 'green':'#00712D'
         
        },
      },
    },

  plugins: [],
}
