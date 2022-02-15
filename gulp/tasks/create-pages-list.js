import glob from "glob";
import * as fs from "fs";
import {basename} from "path";

import {config, dist} from "../config.js";

const file = dist + config.html.tasks.pagesList.fileName;

/**
 * Шабон стрницы
 */
const html = (list) => {
  return `<!doctype html>
<html lang="en">
<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>Список страниц</title>
   <style>
      .container {
         max-width: 1200px;
         margin: 0 auto;
         font-size: 18px;
         font-family: 'Arial', sans-serif;
         line-height: 100%;
      }
      
      a {
         color: #0d6efd;
         display: block;
         margin-bottom: 15px;
      }
   </style>
</head>
<body>
    <div class="container">
        <h1>Список страниц</h1>
        <ol>
            ${list}
        </ol>
   </div>
</body>
</html>
`
}

/**
 * Создание файла со список страниц
 */
export const createPagesList = (cb) => {
  if (config.html.tasks.pagesList.create) {
    return glob(config.html.pages, (err, data) => {
      let lis = "";

      data.forEach(file => {
        const content = fs.readFileSync(file);

        const title = String(content) !== "" ? String(content)
            .match(/{#-.*?-#}/g)[0]
            .replace('{#-', '')
            .replace('-#}', '')
            .trim() : basename(file).replace(".twig", "");

        lis += `<li><a href="${basename(file).replace(".twig", ".html")}">${title}</a></li>`;
      });

      fs.appendFileSync(file, html(lis))
    });
  }
  cb();
}
