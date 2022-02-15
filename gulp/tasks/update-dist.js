import pkg from "gulp";
import clean from "gulp-clean";
import {dist} from "../config.js";

const {src} = pkg;

/**
 * Удаление папки dest
 */
export const updateDist = () => {
   return src(dist, {read: false, allowEmpty: true}).pipe(clean())
}
