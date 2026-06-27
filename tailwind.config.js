/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        accent: '#FE81D4',
        blush: '#FAACBF',
        soft: '#FBC3C1',
        faded: '#FFEABB'
      }
    }
  },
  plugins: []
}
