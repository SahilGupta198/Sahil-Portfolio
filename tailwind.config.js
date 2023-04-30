
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        "dark": "#111111",
        "light": "#F5F5F5",
        "main": "#65eeb7",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "radial-gradient(ellipse at 50% 45%, #222222 0%, #111111 50%)",

        "gradient-rainblue":
          "linear-gradient(135deg, #F5F5F5 0%, #81CFB1 20%, #55B791 40%, #62D9A9 60%, #65EEB7 80%)",
        "pattern": "url('./assets/pattern.png')",
        "pattern2": "url('./assets/pattern2.jpg')",
        "pattern3": "url('./assets/pattern3.png')",
      }),
      fontFamily: {
        playfair: ["Archivo Black", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        pattern: "url('./assets/pattern.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};