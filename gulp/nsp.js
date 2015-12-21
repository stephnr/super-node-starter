'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

// const cfg = require('./_config');

gulp.task('nsp', cb => {
  plugins.nsp({
    package:     `${__dirname}/../package.json`,
    stopOnError: false
  }, cb);
});
