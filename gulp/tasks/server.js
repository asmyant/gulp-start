import pkg from "gulp";
import open from "gulp-open";

import browserSync from "browser-sync";
import {config, dist} from "../config.js";

const {src} = pkg;

/**
 * Сервер
 */
function server() {
   browserSync.init(config.server);
}

/**
 * Открыть страницу списков страниц в браузере после build (или index.html)
 */
const openBuild = () => {
   return src(dist + (config.html.tasks.pagesList.fileName || "index.html"))
      .pipe(open())
}

export {browserSync, server, openBuild};
