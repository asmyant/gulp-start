import pkg from "gulp";

import {config} from "../config.js";

const {src, dest} = pkg;

/**
 * Шрифты
 */
export const fonts = () => {
   return src(config.fonts.src)
      .pipe(dest(config.fonts.dist))
}
