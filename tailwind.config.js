module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        launch:
          'linear-gradient(165.6deg, #01adb5 -6.24%, #7194ec 54%, #f389bc 106.05%)',
      },
      colors: {
        'mina-green': '#01adb5',
        'mina-blue': '#117bb6',
        'mina-pink': '#f389bc',
        dark: '#3f3d56',
      },
    },
  },
  plugins: [],
}
