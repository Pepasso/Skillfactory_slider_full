// const {
//   stream
// } = require("browser-sync");
// const browserSync = require("browser-sync").create();
import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();

//Обработка html
export default () => {

  return gulp.src(path.html.src) //{html, css} указание нескольких расширений или разделов (["./src/**/*.css", "./src/**/*.js"]) массив на несколько масок, !+маска убирание файлов из выборки
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: "HTML",
        message: error.message
      }))
    }))
    .pipe(gp.fileInclude())
    .pipe(gp.webpHtml())
    .pipe(gp.size({
      title: "До сжатия"
    }))
    .pipe(gp.htmlmin(app.htmlmin))
    .pipe(gp.size({
      title: "После сжатия"
    }))
    .pipe(gulp.dest(path.html.dest));
  // .pipe(browserSync.stream());

}