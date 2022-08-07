import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();

//Обработка Font
export default () => {

  return gulp.src(path.font.src) //{html, css} указание нескольких расширений или разделов (["./src/**/*.css", "./src/**/*.js"]) массив на несколько масок, !+маска убирание файлов из выборки
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: "Font",
        message: error.message
      }))
    }))
    .pipe(gp.newer(path.font.dest))
    .pipe(gp.fonter(app.fonter))
    .pipe(gulp.dest(path.font.dest))
    .pipe(gp.ttf2woff2())
    .pipe(gulp.dest(path.font.dest));

}