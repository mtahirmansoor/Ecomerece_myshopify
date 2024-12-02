/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",  // Include all .liquid files in the layout directory
    "./templates/**/*.liquid",  // Include all .liquid files in the templates directory
    "./sections/**/*.liquid",  // Include all .liquid files in the sections directory
    "./snippets/**/*.liquid",  // Include all .liquid files in the snippets directory
    "./assets/**/*.js",  // Include all JavaScript files in the assets directory
    "./**/*.html",  // If you have any HTML files (optional)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
