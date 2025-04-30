// postcss.config.js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},    // ← new adapter
    "autoprefixer": {},            // ← leave autoprefixer in place
  }
}
