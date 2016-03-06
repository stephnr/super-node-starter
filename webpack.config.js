'use strict';

/*===============================
=            MODULES            =
===============================*/

const WebpackNotifierPlugin = require('webpack-notifier');
const autoprefixer = require('autoprefixer');

const cfg = require('./_gulp/_config');

/*=====  End of MODULES  ======*/

module.exports = {
  entry: {
    app:    `./${cfg.files.mainApp}`
  },
  output: {
    path:     './src/client/public/zip',
    filename: '[name].bundle.js',
  },
  module: {
    /*----------- LOADERS -----------*/
    loaders: [
      { test: /\.scss$/, loader: 'style!css?sourceMap!postcss!sass?sourceMap' },
      { test: /\.css$/, loader: 'style!css!postcss' },
      { test: /\.png$/, loader: 'url?mimetype=image/png' }
    ]
  },
  /*=============================================>>>>>
  = LOADER CONFIGURATIONS =
  ===============================================>>>>>*/

  /*----------- POSTCSS -----------*/

  postcss: function() {
    return [ autoprefixer ];
  },

  /*----------- UGLIFYJS -----------*/

  'uglify-loader': {
    mangle:    false,
    sourceMap: false
  },

  /*= End of LOADER CONFIGURATIONS =*/
  /*=============================================<<<<<*/

  /*=============================================>>>>>
  = PLUGINS =
  ===============================================>>>>>*/

  plugins: [
    new WebpackNotifierPlugin({ title: 'Webpack', alwaysNotify: true })
  ],

  /*= End of PLUGINS =*/
  /*=============================================<<<<<*/

  devtool: 'eval',
  // watch:   true
};
