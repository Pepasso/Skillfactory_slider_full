import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();
const {
  isDev
} = require("../config/app.js");

//Обработка css
export default () => {

  return gulp.src(path.css.src, {
      sourcemaps: isDev
    }) //{html, css} указание нескольких расширений или разделов (["./src/**/*.css", "./src/**/*.js"]) массив на несколько масок, !+маска убирание файлов из выборки
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: "css",
        message: error.message
      }))
    }))
    .pipe(gp.concat("common.css"))
    .pipe(gp.cssimport())
    .pipe(gp.webpCss())
    .pipe(gp.autoprefixer())
    .pipe(gp.shorthand())
    .pipe(gp.groupCssMediaQueries())
    .pipe(gp.size({
      title: "common.css"
    }))
    .pipe(gulp.dest(path.css.dest, {
      sourcemaps: isDev
    }))
    .pipe(gp.rename({
      suffix: ".min"
    }))
    .pipe(gp.csso())
    .pipe(gp.size({
      title: "common.min.css"
    }))
    .pipe(gulp.dest(path.css.dest, {
      sourcemaps: isDev
    }));

}