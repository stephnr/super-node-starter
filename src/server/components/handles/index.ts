/* eslint no-magic-numbers:0 */
/* eslint no-loop-func:0 */
'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as Handler from './handles.d';
import * as express from 'express';

import _ = require('lodash');

/*=====  End of MODULES  ======*/

/*================================================
=            BUILD HANDLES FROM CODES            =
================================================*/

module ResponseHandler {
    var CODES: Handler.ICODES;

    CODES = {
        /*----------  SUCCESS  ----------*/

        SUCCESS: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NO_CONTENT: 204,
        RESET_CONTENT: 205,

        /*----------  REDIRECT  ----------*/

        MOVED_PERMANENTLY: 301,
        TEMPORARY_MOVED: 302,
        TEMPORARY_REDIRECT: 307,
        PERMANENT_REDIRECT: 308,

        /*----------  ERROR  ----------*/

        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        NOT_ACCEPTABLE: 406,
        UNSUPPORTED_MEDIA: 415,
        TOO_MANY_REQUESTS: 429,

        /*----------  SERVER  ----------*/

        SERVER_ERROR: 500,
        NOT_IMPLEMENTED: 501,
        SERVICE_UNAVAILABLE: 503,
        UNKNOWN_ERROR: 520
    }

    function httpResHandle(res: express.Response, code: number, msg?: string, data?: Object) {
        res.status(code);
        return res.json(_.extend({
            success: (code <= 299),
            message: msg || {},
            data: data || {}
        }));
    }

    export class Handler implements Handler.IHttpResponseHandler {
        CODES: Handler.ICODES;

        /*----------  SUCCESS  ----------*/

        SUCCESS(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.SUCCESS, message, data); };
        CREATED(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.CREATED, message, data); };
        ACCEPTED(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.ACCEPTED, message, data); };
        NO_CONTENT(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.NO_CONTENT, message, data); };
        RESET_CONTENT(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.RESET_CONTENT, message, data); };

        /*----------  REDIRECT  ----------*/

        MOVED_PERMANENTLY(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.MOVED_PERMANENTLY, message, data); };
        TEMPORARY_MOVED(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.TEMPORARY_MOVED, message, data); };
        TEMPORARY_REDIRECT(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.TEMPORARY_REDIRECT, message, data); };
        PERMANENT_REDIRECT(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.PERMANENT_REDIRECT, message, data); };

        /*----------  ERROR  ----------*/

        BAD_REQUEST(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.BAD_REQUEST, message, data); };
        UNAUTHORIZED(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.UNAUTHORIZED, message, data); };
        FORBIDDEN(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.FORBIDDEN, message, data); };
        NOT_FOUND(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.NOT_FOUND, message, data); };
        NOT_ACCEPTABLE(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.NOT_ACCEPTABLE, message, data); };
        UNSUPPORTED_MEDIA(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.UNSUPPORTED_MEDIA, message, data); };
        TOO_MANY_REQUESTS(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.TOO_MANY_REQUESTS, message, data); };

        /*----------  SERVER  ----------*/

        SERVER_ERROR(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.SERVER_ERROR, message, data); };
        NOT_IMPLEMENTED(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.NOT_IMPLEMENTED, message, data); };
        SERVICE_UNAVAILABLE(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.SERVICE_UNAVAILABLE, message, data); };
        UNKNOWN_ERROR(res: express.Response, message?: string, data?: Object) { return httpResHandle(res, CODES.UNKNOWN_ERROR, message, data); };

        constructor() {
            this.CODES = CODES;
        }
    }
}

export = ResponseHandler;

/*=====  End of BUILD HANDLES FROM CODES  ======*/
