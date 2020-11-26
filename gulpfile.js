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
		.pipe(importCss())
		.pipe(rename({
			basename: "app",
			extname: ".css",

		}))  
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
		.pipe(size({
			showFiles: true,
			showTotal: false
		}))

}


// Watch files
function watchFiles() {
//	return watch("./resources/css/styles/**/*", css);
//gulp.watch("./assets/js/**/*", gulp.series(scriptsLint, scripts));
  return watch(
    [
      "./resources/css/styles/**/*.css",
      "./App/Web/User/Views/Layouts/**/*.css",
      "./App/Web/User/Views/Partials/**/*.css",
      "./App/Web/User/Views/Pages/**/*.css"
    ],
    css
  );
//gulp.watch("./assets/img/**/*", images);
}

// define complex tasks
//const js = gulp.series(scriptsLint, scripts);
//const build = gulp.series(clean, gulp.parallel(css, images, jekyll, js));
//const watch = gulp.parallel(watchFiles, browserSync);
//const watcher = watchFiles;

// export tasks
//exports.images = images;
exports.css = css;
//exports.js = js;
//exports.jekyll = jekyll;
//exports.clean = clean;
//exports.build = build;
//exports.watch = watch;
exports.default = watchFiles;
