/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["stories/**/*.mdx", "stories/**/*.@(js|jsx|ts|tsx)"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
