import pkg from "gulp";
import ftp from 'vinyl-ftp';
import {config, dist} from "../config.js";

const directory = [dist + '**/*'];
const {src} = pkg;

const {access, folder} = config.deploy.folder;

/**
 * Деплой
 * @returns {*}
 */
export const deploy = (cb) => {
  if (config.deploy.enable) {
    const connect = ftp.create({...access});

    return src(directory, {base: dist, buffer: false})
        .pipe(connect.newer(folder))
        .pipe(connect.dest(folder));
  } else {
    cb();
  }
}

