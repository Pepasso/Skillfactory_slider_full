import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();
const sass = require("gulp-sass")(require("sass"));
import isDev from "../config/app.js";


//Обработка scss
export default () => {

  return gulp.src(path.scss.src, {
      sourcemaps: isDev
    }) //{html, css} указание нескольких расширений или разделов (["./src/**/*.css", "./src/**/*.js"]) массив на несколько масок, !+маска убирание файлов из выборки
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: "scss",
        message: error.message
      }))
    }))
    .pipe(gp.sassGlob())
    .pipe(sass())
    .pipe(gp.webpCss())
    .pipe(gp.autoprefixer())
    .pipe(gp.shorthand())
    .pipe(gp.groupCssMediaQueries())
    .pipe(gp.size({
      title: "common.scss"
    }))
    .pipe(gulp.dest(path.scss.dest, {
      sourcemaps: isDev
    }))
    .pipe(gp.rename({
      suffix: ".min"
    }))
    .pipe(gp.csso())
    .pipe(gp.size({
      title: "common.min.scss"
    }))
    .pipe(gulp.dest(path.scss.dest, {
      sourcemaps: isDev
    }));

}