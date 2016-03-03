'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

/*=============================
=            TASKS            =
=============================*/

/** Runs the Node Security Project against package.json */
gulp.task('nsp', () => {
  plugins.nsp({
    package:     `./package.json`,
    stopOnError: false
  });
});

/*=====  End of TASKS  ======*/
