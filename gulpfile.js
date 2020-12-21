 // подключаем gulp
//const gulp = require ("gulp");
// создадим две переменные, отвечающие за чтение исходных файлов (src) и запись сгенерированных файлов (dest).
const {src, dest, watch, series} = require ("gulp");

// передаем модули в переменные
const autoprefixer = require ("gulp-autoprefixer");
const removeComments = require ("gulp-strip-css-comments");
const rename = require ("gulp-rename");
const cssnano = require ("gulp-cssnano");
const importCss = require ('gulp-import-css');
const size = require('gulp-size');

const concatJS = require('gulp-concat');
const babel = require('gulp-babel');
const terser = require('gulp-terser');

let path = {
   build: {
   	css: "public/css/",
		  js: "public/js/"
	},
	src: {
  		css: "resources/css/",
		  js: "resources/js/"
	},
	import: {
		css: "resources/css/import.css"
	}
}

let JSFiles = [
		  "resources/js/libs/*.js",
		  "resources/ls/scripts/*.js",
		  "App/Web/User/Views/Layouts/**/*.js",
		  "App/Web/User/Views/Pages/**/*.js",
		  "App/Web/User/Views/Partials/**/*.js"
]
 
let CSSFiles = [
      "./resources/css/styles/**/*.css",
      "./App/Web/User/Views/Layouts/**/*.css",
      "./App/Web/User/Views/Partials/**/*.css",
      "./App/Web/User/Views/Pages/**/*.css"
    ]

const js = () => {
		  return (src(JSFiles))
		  .pipe(concatJS("concat.js"))
		  .pipe(dest(path.src.js))
		  .pipe(babel({
            presets: ['@babel/env']
        }))
		.pipe(rename({
		  basename: "babel",
			extname: ".js"
		}))
		  .pipe(dest(path.src.js))
		.pipe(rename({
		  basename: "app",
			suffix: ".min",
			extname: ".js"
		}))
		  .pipe(terser())
		  .pipe(dest(path.build.js))
		.pipe(size({
			showFiles: true,
			showTotal: false
		}))

}
const css = () => {	
	return src(path.import.css)
		.pipe(importCss())
		.pipe(rename({
			basename: "app",
			extname: ".css",

		}))
		  .pipe(dest(path.src.css))
		.pipe(autoprefixer({    
			Browserslist: ['last 8 versions'],
         cascade: true
   	}))
		.pipe(rename({
			basename: "prefix",
			extname: ".css",

		}))
		  .pipe(dest(path.src.css))
		.pipe(cssnano({
			zindex: false,
			discardComments: {
				removeAll: true
			}
		}))
		.pipe(removeComments())
		.pipe(rename({
		  basename: "app",
			suffix: ".min",
			extname: ".css"
		}))
		.pipe(dest(path.build.css))
		.pipe(size({
			showFiles: true,
			showTotal: false
		}))

}
// Watch
const watcher = () => {
  watch(CSSFiles, css);
  watch(JSFiles, js);
};

// Default

exports.default = watcher

exports.watch = watcher;
exports.js = js;
exports.css = css;
