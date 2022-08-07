// import news from "../data/news.json"

const isProd = process.argv.includes("--production");
const isDev = !isProd;

export default {
  isProd,
  isDev,

  htmlmin: {
    collapseWhitespace: isProd // убирает из разметки лишние пробелы
  },

  webpack: {
    mode: isProd ? "production" : "development" //или production
  },

  imagemin: {
    verbose: true
  },

  fonter: {
    formats: ["ttf", "woff", "woff2", "eot", "svg"]
  }
};