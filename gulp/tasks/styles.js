import pkg from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import gulpif from 'gulp-if';
import sourceMaps from "gulp-sourcemaps";
import gcmq from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import shortHand from "gulp-shorthand";
import clean from "gulp-clean-css";
import concat from "gulp-concat";
import notify from "gulp-notify";

import {production} from "./env.js";
import {config} from "../config.js";
import {browserSync} from "./server.js";

const sass = gulpSass(dartSass);
const {src, dest} = pkg;

/**
 * Главные стили
 */
export const styles = () => {
  return src(config.styles.src.index)
      .pipe(gulpif(production && config.styles.tasks.sourceMap.create, sourceMaps.init()))
      .pipe(sass(config.styles.tasks.sass))
      .on("error", notify.onError((err) => {
        return {
          title: "Ошибка в стилях",
          message: err.message
        }
      }))
      .pipe(gulpif(production,
          gcmq(),
          autoprefixer(),
          shortHand(),
      ))
      .pipe(gulpif(production, clean(config.styles.tasks.clean)))
      .pipe(gulpif(production && config.styles.tasks.sourceMap.create, sourceMaps.write(config.styles.tasks.sourceMap.dist)))
      .pipe(dest(config.styles.dist))
      .pipe(gulpif(!production, browserSync.stream()))
}

/**
 * Плагины
 */
export const styleVendors = () => {
  return src(config.styles.src.vendors)
      .pipe(gulpif(production && config.styles.tasks.sourceMap.create, sourceMaps.init()))
      .pipe(sass(config.styles.tasks.sass))
      .on("error", notify.onError((err) => {
        return {
          title: "Ошибка в стилях",
          message: err.message
        }
      }))
      .pipe(gulpif(production,
          gcmq(),
          autoprefixer(),
          shortHand(),
      ))
      .pipe(gulpif(production, clean(config.styles.tasks.clean)))
      .pipe(concat(config.styles.src.vendorsFile))
      .pipe(gulpif(production && config.styles.tasks.sourceMap.create, sourceMaps.write(config.styles.tasks.sourceMap.dist)))
      .pipe(dest(config.styles.dist))
      .pipe(gulpif(!production, browserSync.stream()))
}
