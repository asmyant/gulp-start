import pkg from "gulp";
import webpack from "webpack";
import babel from "gulp-babel";
import webpackStream from "webpack-stream";
import uglify from "gulp-uglify";
import gulpif from "gulp-if";
import notify from "gulp-notify";
import concat from "gulp-concat";

import {config} from "../config.js";
import {production} from "./env.js";
import {browserSync} from "./server.js";
import webPackConfig from "../../webpack.config.js";

const {src, dest} = pkg;

/**
 * Основной фалй
 */
export const js = () => {
   if(config.scripts.mode === "webpack") {
      return src(config.scripts.src.index)
         .pipe(webpackStream(webPackConfig), webpack)
         .pipe(gulpif(!production, babel({
            presets: ["@babel/env"]
         })))
         .pipe(dest(config.scripts.dist))
         .pipe(gulpif(!production, browserSync.stream()))
   } else {
      return src(config.scripts.src.index)
         .pipe(dest(config.scripts.dist))
         .pipe(gulpif(!production, browserSync.stream()))
   }
}

/**
 * Плагины, mode != webpack
 */
export const jsVendors = (cb) => {
   if(config.scripts.mode !== "webpack") {
      return src(config.scripts.src.vendors)
         .pipe(uglify())
         .pipe(concat("vendors.js"))
         .pipe(dest(config.scripts.dist))
         .pipe(gulpif(!production, browserSync.stream()))
   }
   cb();
}
