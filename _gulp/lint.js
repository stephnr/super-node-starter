'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

/*=============================
=            TASKS            =
=============================*/

const srcFiles = [ './src/**/*.js' ];

/** Runs the Node Security Project against package.json to find vulnerabilities */
gulp.task('lint', cb => {
  return gulp.src(srcFiles)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError());
});

/*=====  End of TASKS  ======*/
