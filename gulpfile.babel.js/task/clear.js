// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";


import del from "del";

//Удаление не нужных файлов

export default () => {
  return del(path.root);
};