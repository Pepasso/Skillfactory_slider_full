const pathSrc = "./src";
const pathDest = "./public";

export default {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest
  },

  // css: {
  //   src: pathSrc + "/css/*.css",
  //   watch: pathSrc + "/css/**/*.css",
  //   dest: pathDest + "/css"
  // },

  scss: {
    src: pathSrc + "/scss/*.{scss,sass}",
    watch: pathSrc + "/scss/**/*.{scss,sass}",
    dest: pathDest + "/css"
  },

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js"
  },

  img: {
    src: pathSrc + "/img/**/*.{png,jpeg,jpg,giv,svg}", //если надо что бы тянулись с путями "/img/**/*.{png,jpeg,jpg,giv,svg}"
    watch: pathSrc + "/img/**/*.{png,jpeg,jpg,giv,svg}",
    dest: pathDest + "/img"
  },

  font: {
    src: pathSrc + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    dest: pathDest + "/font"
  }
};
