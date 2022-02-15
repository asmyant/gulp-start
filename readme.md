# 💣 Привет мир
Документация по использованию сборщика.

## 🔥 Особенности
***
1. Используются препроцессоры [Pug](https://pugjs.org/api/getting-started.html) и [SCSS](https://sass-lang.com/).
1. Используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах.
1. Используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей.
1. Используется [browser-sync](https://browsersync.io/).
1. Используется таск для добавлении версии в `.html` файлах.
1. Используется [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) последней версии. Подключен
   модулями.

***
## 🛠️ Установка
1. Установите NodeJS.
1. скачайте сборку в консоли с помощью [Git](https://git-scm.com/downloads):
   `git clone https://asmyan00@bitbucket.org/asmyan00/samurai.git .`.
1. Передите в корневую папку проекта и установите необходимые зависимости: `npm i`.
1. Запустите проект в режиме разработки: `development` `npm run dev`.

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером. Режим сборки по умолчение
включен `--development`.
***
## 📂 Базовая структура

```
    start-project
    ├── gulp
    │   ├── tasks
    │   │   ├── create-pages-list.js
    │   │   ├── env.js
    │   │   ├── fonts.js
    │   │   ├── html.js
    │   │   ├── images.js
    │   │   ├── javascript.js
    │   │   ├── server.js
    │   │   ├── styles.js
    │   │   ├── update-dist.js
    │   │   ├── watcher.js
    │   │   ├── zip.js
    │   ├── config.js
    ├── src
    │   ├── fonts
    │   ├── images
    │   ├── js
    │   │   ├── helpers
    │   │   ├── modules
    │   │   ├── vendors
    │   │   ├── main.js
    │   ├── pug
    │   │   ├── components
    │   │   ├── layout
    │   │   │   ├── footer.pug
    │   │   │   ├── head.pug
    │   │   │   ├── header.pug
    │   │   │   ├── script.pug
    │   │   ├── templates
    │   │   │   ├── default.pug
    │   │   ├── pages
    │   │   │   ├── index.pug
    │   │   ├── index.pug
    │   ├── scss
    │   │   ├── abstracts
    │   │   │   ├── functions.scss
    │   │   │   ├── mixins.scss
    │   │   │   ├── variables.scss
    │   │   │   ├── utilites.scss
    │   │   ├── base
    │   │   │   ├── body.scss
    │   │   │   ├── typography.scss
    │   │   │   ├── utils.scss
    │   │   ├── components
    │   │   ├── layout
    │   │   │   ├── footer.scss
    │   │   │   ├── header.scss
    │   │   │   ├── main.scss
    │   │   ├── pages
    │   │   ├── vendors
    │   │   │   ├── bootstrap.scss
    │   │   ├── style.scss
    ├── .babelrc
    ├── .editorconfig
    ├── .gitignore
    ├── gulp.babel.js
    ├── package.json
    ├── package-lock.json
    ├── readme.md
    ├── webpack.config.js
```
