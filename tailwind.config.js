/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/About.jsx",
    "./src/components/Banner.jsx",
    "./src/components/Contacts.jsx",
    "./src/components/Skills.jsx",
    "./src/components/Footer.jsx",
    "./src/components/Navbar.jsx",
    "./src/components/Projects.jsx"
  ],
  theme: {
    colors: {
      'grey': "#E1E3E4",
      'white': "#ffffff",
      'black': "#000000"
    },
    fontFamily: {
      vazirmatn: ['Vazirmatn', "sans-serif"],
      montserratlight: ['Montserrat', "sans-serif"]
    },
    extend: {
      backgroundImage: {
        banner: "./src/assets/background.svg"
      }
    }
  },
  plugins: [],
}

