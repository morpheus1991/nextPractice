module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  addBase: {},
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.ts",
    "./pages/**/*.tsx",
    "./components/**/*.ts",
    "./components/**/*.tsx",
  ],
};
