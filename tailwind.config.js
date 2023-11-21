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
      'champ': "#F9DEC9",
      'purple': "#210124",
      'pink': "#F45866",
      'green': "#048A81",
      'brown': "#896A67",
      'white': "#ffffff",
      'black': "#000000"
    },
  },
  plugins: [],
}

