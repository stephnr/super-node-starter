'use strict';

const requireDir = require('require-dir');
const gulp = require('gulp');

requireDir('./_gulp');

// Defines the default task(s) to run on `gulp`
gulp.task('default', [ 'nsp' ]);
