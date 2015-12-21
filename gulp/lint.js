'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const cfg = require('./_config');

gulp.task('lint', () => {
  return gulp.src([ cfg.files.nodeServer, cfg.files.webWorkers ])
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format());
});
