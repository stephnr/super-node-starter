/* eslint no-magic-numbers:0, brace-style: 0, no-loop-func: 0 */
'use strict';

/*===============================
=            MODULES            =
===============================*/

import _ from 'lodash';

/*=====  End of MODULES  ======*/

/** Class to build Express JSON Responses */
class ResponseHandler {
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
      TOKEN_EXPIRED:     498,

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
  SUCCESS(res, message, data) { return this.httpResHandle(res, this.CODES.SUCCESS, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  CREATED(res, message, data) { return this.httpResHandle(res, this.CODES.CREATED, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  ACCEPTED(res, message, data) { return this.httpResHandle(res, this.CODES.ACCEPTED, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  NO_CONTENT(res, message, data) { return this.httpResHandle(res, this.CODES.NO_CONTENT, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  RESET_CONTENT(res, message, data) { return this.httpResHandle(res, this.CODES.RESET_CONTENT, message, data); }

  /*----------  REDIRECT  ----------*/

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  MOVED_PERMANENTLY(res, message, data) { return this.httpResHandle(res, this.CODES.MOVED_PERMANENTLY, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  TEMPORARY_MOVED(res, message, data) { return this.httpResHandle(res, this.CODES.TEMPORARY_MOVED, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  TEMPORARY_REDIRECT(res, message, data) { return this.httpResHandle(res, this.CODES.TEMPORARY_REDIRECT, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  PERMANENT_REDIRECT(res, message, data) { return this.httpResHandle(res, this.CODES.PERMANENT_REDIRECT, message, data); }

  /*----------  ERROR  ----------*/

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  BAD_REQUEST(res, message, data) { return this.httpResHandle(res, this.CODES.BAD_REQUEST, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  UNAUTHORIZED(res, message, data) { return this.httpResHandle(res, this.CODES.UNAUTHORIZED, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  FORBIDDEN(res, message, data) { return this.httpResHandle(res, this.CODES.FORBIDDEN, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  NOT_FOUND(res, message, data) { return this.httpResHandle(res, this.CODES.NOT_FOUND, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  NOT_ACCEPTABLE(res, message, data) { return this.httpResHandle(res, this.CODES.NOT_ACCEPTABLE, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  UNSUPPORTED_MEDIA(res, message, data) { return this.httpResHandle(res, this.CODES.UNSUPPORTED_MEDIA, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  TOO_MANY_REQUESTS(res, message, data) { return this.httpResHandle(res, this.CODES.TOO_MANY_REQUESTS, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  TOKEN_EXPIRED(res, message, data) { return this.httpResHandle(res, this.CODES.TOKEN_EXPIRED, message, data); }

  /*----------  SERVER  ----------*/

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  SERVER_ERROR(res, message, data) { return this.httpResHandle(res, this.CODES.SERVER_ERROR, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  NOT_IMPLEMENTED(res, message, data) { return this.httpResHandle(res, this.CODES.NOT_IMPLEMENTED, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  SERVICE_UNAVAILABLE(res, message, data) { return this.httpResHandle(res, this.CODES.SERVICE_UNAVAILABLE, message, data); }

  /**
   * Constructs an HTTP JSON Response
   * @param  {Object} res   the express response object
   * @param  {any?} message the message
   * @param  {any?} data    the data
   * @return {JSON} json   the json response
   */
  UNKNOWN_ERROR(res, message, data) { return this.httpResHandle(res, this.CODES.UNKNOWN_ERROR, message, data); }

  /**
   * Constructs a response for the given params
   * @param  {express.Response} res express response object
   * @param  {number} code          http status code
   * @param  {string} msg           message
   * @param  {any} data             data to send
   * @return {JSON} json            the json response
   */
  httpResHandle(res, code, msg, data) {
    res.status(code);
    return res.json(_.extend({
      success: (code <= 299),
      message: msg || {},
      data:    data || {}
    }));
  }
}

const Handles = new ResponseHandler();

export default Handles;

/*=====  End of BUILD HANDLES FROM CODES  ======*/
