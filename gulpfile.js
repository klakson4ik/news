 // подключаем gulp
const gulp = require ("gulp");

// создадим две переменные, отвечающие за чтение исходных файлов (src) и запись сгенерированных файлов (dest).
const {src, dest} = require ("gulp");

// передаем модули в переменные
const autoprefixer = require ("gulp-autoprefixer");
const removeComments = require ("gulp-strip-css-comments");
const rename = require ("gulp-rename");
const cssnano = require ("gulp-cssnano");
const importCss = require ('gulp-import-css');

let path = {
   build: {
   	css: "public/css/"
	},
	src: {
  		css: "resources/css/app.css"
	},
	import: {
		css: "resources/css/import.css"
	}
}

function css(){	
	return src(path.import.css)
		.pipe(importCss(path.src.css))
		.pipe(autoprefixer({    
			Browserslist: ['last 8 versions'],
         cascade: true
   	}))
		.pipe(cssnano({
			zindex: false,
			discardComments: {
				removeAll: true
			}
		}))
		.pipe(removeComments())
		.pipe(rename({
			suffix: ".min",
			extname: ".css"
		}))
		.pipe(dest(path.build.css))
}

exports.css = css
