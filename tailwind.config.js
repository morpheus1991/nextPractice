module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  addBase: {},
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./pages/**/*.jsx",
    "./components/**/*.js",
    "./components/**/*.jsx",
  ],
};