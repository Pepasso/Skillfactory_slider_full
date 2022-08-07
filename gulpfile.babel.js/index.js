  //Пакеты
  import gulp from "gulp";
  import browserSync from "browser-sync";

  //Конфигурация
  import path from "./config/path.js";
  import app from "./config/app.js";


  // Мои task
  import clear from './task/clear.js';
  import html from './task/html.js';
  // import css from './task/css.js';
  import scss from './task/scss.js';
  import js from './task/js.js';
  import img from './task/img.js';
  import font from './task/font.js';
  import fontStyle from './task/fontStyle.js';


  //Сервер
  const server = () => {
    browserSync.init({
      server: {
        baseDir: path.root
      }
    });
  };

  //Наблюдатель
  const watcher = () => {
    gulp.watch(path.html.watch, html).on("all", browserSync.reload);
    // watch(path.css.watch, css).on("all", browserSync.reload);
    gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
    gulp.watch(path.js.watch, js).on("all", browserSync.reload);
    gulp.watch(path.img.watch, img).on("all", browserSync.reload);
    gulp.watch(path.font.watch, font).on("all", browserSync.reload);
    gulp.watch('../src/scss/block/fonts.scss').on("all", browserSync.reload);
  }

  //Виды сборок

  const build = gulp.series(
    clear,
    fontStyle,
    gulp.parallel(html, scss, js, img, font)
  );

  const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
  );

  //Задачи
  export {
    html
  };
  export {
    watcher
  };
  export {
    clear
  };
  // export { css };
  export {
    scss
  };
  export {
    js
  };
  export {
    img
  };
  export {
    font
  };
  export {
    fontStyle
  };

  //Сборка
  export default app.isProd ?
    build :
    dev;