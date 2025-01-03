module.exports = {
  content: [
    '.app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    '.components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        turquoise: '#30b4a0',
        'electric-blue': '#7DF9FF',
        'soft-lilac': '#D1C4E9'
      },
      height: {
        500: '500px',
        720: '720px',
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
