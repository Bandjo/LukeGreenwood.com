/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#124C2F',
        'earthy-brown': '#5A381E',
        'neutral-cream': '#F4F4F2',
        'accent-moss-green': '#2FA15E',
      },
    },
  },
  plugins: [],
}