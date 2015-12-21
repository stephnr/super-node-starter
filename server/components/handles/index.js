/**
 * Specific HTTP Status Code Handlers
 */

'use strict';

const CODES = {};

/* SUCCESS CODES */
CODES.SUCCESS = 200;
CODES.CREATED = 201;
CODES.ACCEPTED = 202;
CODES.NO_CONTENT = 204;
CODES.RESET_CONTENT = 205;

/* REDIRECT CODES */
CODES.MOVED_PERMANENTLY = 301;
CODES.TEMPORARY_MOVED = 302;
CODES.TEMPORARY_REDIRECT = 307;
CODES.PERMANENT_REDIRECT = 308;

/* ERROR CODES */
CODES.BAD_REQUEST = 400;
CODES.UNAUTHORIZED = 401;
CODES.FORBIDDEN = 403;
CODES.NOT_FOUND = 404;
CODES.NOT_ACCEPTABLE = 406;
CODES.UNSUPPORTED_MEDIA = 415;
CODES.TOO_MANY_REQUESTS = 429;

/* SERVER CODES */
CODES.SERVER_ERROR = 500;
CODES.NOT_IMPLEMENTED = 501;
CODES.SERVICE_UNAVAILABLE = 503;
CODES.UNKNOWN_ERROR = 520;

exports.CODES = CODES;

/*======================================
=            GENERAL HANDLES            =
======================================*/

// exports.BAD_REQUEST = function(res, err) {
//   res.status(CODES.BAD_REQUEST);
//   return res.json({
//     success: false,
//     message: {
//       detail: err
//     }
//   });
// };
