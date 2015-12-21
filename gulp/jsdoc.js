'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const cfg = require('./_config');

gulp.task('jsdoc', () => {
  return gulp.src([ cfg.files.nodeServer, cfg.files.webWorkers ])
    .pipe(plugins.babel(cfg.options.babel))
    .pipe(plugins.jsdoc(cfg.options.jsdoc));
});
