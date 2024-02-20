module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily:{
        'Inconsolata' : ['Inconsolata', 'monospace']
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}