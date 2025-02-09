/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./prisma/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1c64f2',
        secondary: '#7e3af2',
        accent: '#e02424',
        neutral: '#3d4451',
        'base-100': '#ffffff',
      },
      borderRadius: {
        'btn': '0.5rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1c64f2',
          secondary: '#7e3af2',
          accent: '#8B0000',
          active: '#8B0000',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
    ],
  },
};