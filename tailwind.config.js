module.exports = {
  content: [
    '.app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    '.components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        500: '500px',
        720: '720px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
