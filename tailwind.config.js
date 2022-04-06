/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  // paths to all files referencing anything Tailwind
  content: [
    "src/components/**/*.{js,ts,jsx,tsx}",
    "src/layouts/**/*.{js,ts,jsx,tsx}",
    "src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
