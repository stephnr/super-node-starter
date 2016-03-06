'use strict';

// Contains various globs + options for running gulp tasks

const cfg = {};

/*===================================
=            DIRECTORIES            =
===================================*/

cfg.dirs = {};
// cfg.dirs.commonViews = 'client/views/common';
cfg.dirs.zip = './src/client/public/zip';

/*=====  End of DIRECTORIES  ======*/


/*=============================
=            GLOBS            =
=============================*/

cfg.globs = {};
cfg.globs.allJS = '**/*.js';
cfg.globs.allSass = '**/*.scss';
cfg.globs.views = '**/*.{ejs,html,htm}';

/*=====  End of GLOBS  ======*/

/*=============================
=            FILES            =
=============================*/

cfg.files = {};
cfg.files.views = `./src/client/views/${cfg.globs.views}`;
cfg.files.mainApp = './src/client/public/js/main.js';
cfg.files.angular = `./src/client/public/js/${cfg.globs.allJS}`;
cfg.files.sass = `./src/client/public/scss/${cfg.globs.allSass}`;

/*=====  End of FILES  ======*/


/*===============================
=            OPTIONS            =
===============================*/

cfg.options = {};

/*=====  End of OPTIONS  ======*/


module.exports = cfg;
