/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: "#DBA111",
        lightGold: "#eee4cc",
        chelseaBlue: "#034694",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      cursor: {
        default: 'url(https://res.cloudinary.com/dvrk2468z/image/upload/v1691071797/pizza-cursor-color_hwluxh.png), default',
        pointer: 'url(https://res.cloudinary.com/dvrk2468z/image/upload/v1691071797/pizza-pointer_giglxt.png), pointer',
      },
    },
  },
  plugins: [],
}
