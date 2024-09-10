/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      "sm" : "375px",
      "md" : "768px",
      "lg" : "1440px"
    },
    extend: {
      colors: {
        'socialGreen' : 'hsl(75, 94%, 57%)',
        'socialGrey700' : 'hsl(0, 0%, 20%)',
        'socialGrey800' : 'hsl(0, 0%, 12%)',
        'socialGrey900' : 'hsl(0, 0%, 8%)'
      }
    },
    fontFamily: {
      'Inter': ['Inter']
    }
  },
  plugins: [],
}

