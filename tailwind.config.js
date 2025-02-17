/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        josefin: ["'Josefin Sans'", "sans-serif"],
        orelega: ["'Orelega One'", "cursive"],
        poppins: ["'Poppins'", "sans-serif"],
        roboto: ["'Roboto Flex'", "sans-serif"],
        camelia: ['Camelia', 'sans-serif'],
        shyte: ['The Shyte', 'sans-serif'],
        lutoriaserif: ['lutoriaserif', 'sans serif'],
        lutoria: ['lutoria', 'sans serif']
    },
  },
  plugins: [],
}};
