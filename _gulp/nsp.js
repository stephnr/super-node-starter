'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

/*=============================
=            TASKS            =
=============================*/

/** Runs the Node Security Project against package.json to find vulnerabilities */
gulp.task('nsp', cb => {
  plugins.nsp({
    package:     `${__dirname}/../package.json`,
    stopOnError: false
  }, cb);
});

/*=====  End of TASKS  ======*/
