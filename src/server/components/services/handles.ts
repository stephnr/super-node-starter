/* eslint no-magic-numbers:0, brace-style: 0, no-loop-func: 0 */
'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as _ from 'lodash';
import * as express from 'express';

/*=====  End of MODULES  ======*/

/*================================================
=            BUILD HANDLES FROM CODES            =
================================================*/

interface CODES {
  /*----------  SUCCESS  ----------*/

  SUCCESS: number,
  CREATED: number,
  ACCEPTED: number,
  NO_CONTENT: number,
  RESET_CONTENT: number,

  /*----------  REDIRECT  ----------*/

  MOVED_PERMANENTLY: number,
  TEMPORARY_MOVED: number,
  TEMPORARY_REDIRECT: number,
  PERMANENT_REDIRECT: number,

  /*----------  ERROR  ----------*/

  BAD_REQUEST: number,
  UNAUTHORIZED: number,
  FORBIDDEN: number,
  NOT_FOUND: number,
  NOT_ACCEPTABLE: number,
  UNSUPPORTED_MEDIA: number,
  TOO_MANY_REQUESTS: number,

  /*----------  SERVER  ----------*/

  SERVER_ERROR: number,
  NOT_IMPLEMENTED: number,
  SERVICE_UNAVAILABLE: number,
  UNKNOWN_ERROR: number
};

/** Class to build Express JSON Responses */
class ResponseHandler {
  public CODES: CODES;

  /** Creates a new instance of the ResponseHandler */
  constructor() {
    this.CODES = {
      /*----------  SUCCESS  ----------*/

      SUCCESS:       200,
      CREATED:       201,
      ACCEPTED:      202,
      NO_CONTENT:    204,
      RESET_CONTENT: 205,

      /*----------  REDIRECT  ----------*/

      MOVED_PERMANENTLY:  301,
      TEMPORARY_MOVED:    302,
      TEMPORARY_REDIRECT: 307,
      PERMANENT_REDIRECT: 308,

      /*----------  ERROR  ----------*/

      BAD_REQUEST:       400,
      UNAUTHORIZED:      401,
      FORBIDDEN:         403,
      NOT_FOUND:         404,
      NOT_ACCEPTABLE:    406,
      UNSUPPORTED_MEDIA: 415,
      TOO_MANY_REQUESTS: 429,

      /*----------  SERVER  ----------*/

      SERVER_ERROR:        500,
      NOT_IMPLEMENTED:     501,
      SERVICE_UNAVAILABLE: 503,
      UNKNOWN_ERROR:       520
    };
  }

  /*----------  SUCCESS  ----------*/

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  SUCCESS(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.SUCCESS, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  CREATED(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.CREATED, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  ACCEPTED(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.ACCEPTED, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  NO_CONTENT(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.NO_CONTENT, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  RESET_CONTENT(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.RESET_CONTENT, message, data); }

  /*----------  REDIRECT  ----------*/

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  MOVED_PERMANENTLY(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.MOVED_PERMANENTLY, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  TEMPORARY_MOVED(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.TEMPORARY_MOVED, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  TEMPORARY_REDIRECT(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.TEMPORARY_REDIRECT, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  PERMANENT_REDIRECT(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.PERMANENT_REDIRECT, message, data); }

  /*----------  ERROR  ----------*/

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  BAD_REQUEST(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.BAD_REQUEST, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  UNAUTHORIZED(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.UNAUTHORIZED, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  FORBIDDEN(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.FORBIDDEN, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  NOT_FOUND(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.NOT_FOUND, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  NOT_ACCEPTABLE(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.NOT_ACCEPTABLE, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  UNSUPPORTED_MEDIA(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.UNSUPPORTED_MEDIA, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  TOO_MANY_REQUESTS(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.TOO_MANY_REQUESTS, message, data); }

  /*----------  SERVER  ----------*/

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  SERVER_ERROR(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.SERVER_ERROR, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  NOT_IMPLEMENTED(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.NOT_IMPLEMENTED, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  SERVICE_UNAVAILABLE(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.SERVICE_UNAVAILABLE, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  UNKNOWN_ERROR(res: express.Response, message?: string, data?: any) { return this.httpResHandle(res, this.CODES.UNKNOWN_ERROR, message, data); }

  /**
  * Construct a response for the given params
  * @param  {Object} res  express response Object
  * @param  {Number} code http status code
  * @param  {any?}   msg  message
  * @param  {any?}   data data to send
  * @return {Object}      the json response
  */
  httpResHandle(res: express.Response, code: number, msg?: string, data?: any) {
    res.status(code);
    return res.json(_.extend({
      success: (code <= 299),
      message: msg || {},
      data:    data || {}
    }));
  }
}

export default (new ResponseHandler());

/*=====  End of BUILD HANDLES FROM CODES  ======*/
