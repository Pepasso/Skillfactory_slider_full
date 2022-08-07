import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();
import webpack from "webpack-stream";
import isDev from "../config/app.js";

//Обработка JavaScript
export default () => {

  return gulp.src(path.js.src, {
      sourcemaps: isDev
    }) //{html, css} указание нескольких расширений или разделов (["./src/**/*.css", "./src/**/*.js"]) массив на несколько масок, !+маска убирание файлов из выборки
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: "javascript",
        message: error.message
      }))
    }))
    .pipe(gp.babel())
    .pipe(webpack(app.webpack))
    .pipe(gp.rename({
      basename: "common"
    }))
    .pipe(gulp.dest(path.js.dest, {
      sourcemaps: isDev
    }));

}