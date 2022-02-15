import pkg from "gulp";

import {config} from "../config.js";

const {src, dest} = pkg;

/**
 * Картинки
 */
export const images = () => {
   return src(config.images.src)
      .pipe(dest(config.images.dist))
}
