'use strict';

/*===============================
=            MODULES            =
===============================*/

const handles = require('../../components/handles');

/*=====  End of MODULES  ======*/


module.exports = app => {
  return (req, res, next) => {
    // Perform OPs on the request. Call next() to continue the chain
    return next();
  };
};
