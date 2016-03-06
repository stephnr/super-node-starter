/* eslint brace-style: 0 */

'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const webpackConfig = require('../webpack.config');

/*=============================
=            TASKS            =
=============================*/

/** Runs the Webpack System in Watch Mode */
gulp.task('webpack', cb => {
  plugins.webpack(webpackConfig, (err, stats) => {
    if(err) { throw new plugins.util.PluginError('webpack', err); }
    plugins.util.log('[webpack]', stats.toString({
      // output options
    }));
    cb();
  });
});

/*=====  End of TASKS  ======*/
