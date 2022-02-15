import pkg from 'gulp';
import pug from 'gulp-pug';
import pugBeautify from 'gulp-pug-beautify';
import gulpif from 'gulp-if';
import version from 'gulp-version-number';

import {config, dist} from "../config.js";
import {browserSync} from "./server.js";
import {production} from "./env.js";

const {src, dest} = pkg;

/**
 * Старницы
 */
export const html = () => {
   return src(config.html.pages)
      .pipe(pug({pretty: !config.html.minify}))
      .pipe(gulpif(!production, pugBeautify(config.html.tasks.beautify)))
      .pipe(dest(config.html.dist))
      .pipe(gulpif(!production, browserSync.stream()));
}

export const htmlVersion = () => {
   return src(dist + "*.html")
      .pipe(gulpif(config.html.versionFiles, version({
         append: {
            value: '%MDS%',
            key: 'v',
            to: ["css", "js", "image"]
         }
      })))
      .pipe(dest(dist))
}
