import pkg from 'gulp';
import twig from 'gulp-twig';
import version from 'gulp-version-number';
import gulpif from 'gulp-if';

import {config, dist} from "../config.js";
import {browserSync} from "./server.js";
import {production} from "./env.js";

const {src, dest} = pkg;

export const html = () => {
   return src(config.html.pages)
      .pipe(twig())
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
