// Конфигурация
import fs from 'fs';
import path from "../config/path.js";

const pathSrc = "./src";

module.exports = function fonts(done) {
  fs.writeFile(pathSrc + '/scss/block/fonts.scss', '', () => {});
  fs.readdir(pathSrc + '/font/', (err, items) => {
    if (items) {
      let c_fontname;
      for (let i = 0; i < items.length; i++) {
        let fontname = items[i].split('.'),
          fontExt;
        fontExt = fontname[1];
        fontname = fontname[0];
        if (c_fontname != fontname) {
          fs.appendFile(pathSrc + '/scss/block/fonts.scss', '@include font-face("' + fontname + '", "' + '../font/' + '' + fontname + '", "400", "normal");\r\n', () => {});
        }
        c_fontname = fontname;
      }
    }
  });
  done();
};