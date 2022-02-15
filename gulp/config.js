/**
 * Папки для разработки
 * @type {string}
 */
export const dist = "./dist/"; // Production
export const src = "./src/"; // Development

/**
 * Название папок
 */
const catalog = {
  styles: "scss",
  scripts: "js",
  images: "images",
  fonts: "fonts",
  html: "twig",
}

/**
 * Главный конфиг для галпа
 */
export const config = {
  deploy: {
    enable: false,
    folder: '',
    ftp: {
      host: '',
      user: '',
      password: '',
      parallel: 10,
    }
  },
  server: {
    server: {
      baseDir: dist,
    },
    port: 3000,
    notify: false,
  },
  styles: {
    src: {
      index: src + catalog.styles + "/style.scss",
      vendors: src + catalog.styles + "/vendors/*.scss",
      vendorsFile: "vendors.css"
    },
    watch: {
      index: src + catalog.styles + "/**/*",
      vendors: src + catalog.styles + "/vendors/**/*"
    },
    dist: dist + "css",
    tasks: {
      clean: {
        level: 2,
      },
      sass: {
        outputStyle: "expanded"
      },
      sourceMap: {
        dist: "./",
        create: true,
      },
    },
  },
  scripts: {
    mode: "webpack",
    src: {
      index: src + catalog.scripts + "/main.js",
      vendors: src + catalog.scripts + "/vendors/*",
    },
    watch: {
      index: src + catalog.scripts + "/**/*",
      vendors: src + catalog.scripts + "/vendors/*"
    },
    webpack: {
      fileName: {
        index: "index.js",
      },
      plugins: {
        $: "jquery",
        jQuery: "jquery",
        svg4everybody: "svg4everybody",
      }
    },
    dist: dist + "js",
  },
  html: {
    pages: src + catalog.html + "/*.twig",
    pagesFolder: src + catalog.html + "/*.twig",
    watch: src + catalog.html + "/**/*.twig",
    minify: false,
    versionFiles: true,
    dist: dist,
    tasks: {
      beautify: {
        beautify: {
          omit_empty: true,
        }
      },
      pagesList: {
        create: true,
        fileName: "pages.html"
      }
    }
  },
  images: {
    src: src + catalog.images + "/**/*",
    watch: src + catalog.images + "/**/*",
    dist: dist + catalog.images
  },
  fonts: {
    src: src + catalog.fonts + "/**/*",
    watch: src + catalog.fonts + "/**/*",
    dist: dist + catalog.fonts
  },
  zip: {
    title: undefined,
    enable: true
  }
}
