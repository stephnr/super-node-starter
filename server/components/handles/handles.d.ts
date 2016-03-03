import * as express from 'express';

export interface ICODES {
  /*----------  SUCCESS  ----------*/

  SUCCESS: number;
  CREATED: number;
  ACCEPTED: number;
  NO_CONTENT: number;
  RESET_CONTENT: number;

  /*----------  REDIRECT  ----------*/

  MOVED_PERMANENTLY: number;
  TEMPORARY_MOVED: number;
  TEMPORARY_REDIRECT: number;
  PERMANENT_REDIRECT: number;

  /*----------  ERROR  ----------*/

  BAD_REQUEST: number;
  UNAUTHORIZED: number;
  FORBIDDEN: number;
  NOT_FOUND: number;
  NOT_ACCEPTABLE: number;
  UNSUPPORTED_MEDIA: number;
  TOO_MANY_REQUESTS: number;

  /*----------  SERVER  ----------*/

  SERVER_ERROR: number;
  NOT_IMPLEMENTED: number;
  SERVICE_UNAVAILABLE: number;
  UNKNOWN_ERROR: number;
}

export interface IHttpResponseHandler {
  /*----------  SUCCESS  ----------*/

  SUCCESS(res: express.Response, msg?: string, data?: any): void;
  CREATED(res: express.Response, msg?: string, data?: any): void;
  ACCEPTED(res: express.Response, msg?: string, data?: any): void;
  NO_CONTENT(res: express.Response, msg?: string, data?: any): void;
  RESET_CONTENT(res: express.Response, msg?: string, data?: any): void;

  /*----------  REDIRECT  ----------*/

  MOVED_PERMANENTLY(res: express.Response, msg?: string, data?: any): void;
  TEMPORARY_MOVED(res: express.Response, msg?: string, data?: any): void;
  TEMPORARY_REDIRECT(res: express.Response, msg?: string, data?: any): void;
  PERMANENT_REDIRECT(res: express.Response, msg?: string, data?: any): void;

  /*----------  ERROR  ----------*/

  BAD_REQUEST(res: express.Response, msg?: string, data?: any): void;
  UNAUTHORIZED(res: express.Response, msg?: string, data?: any): void;
  FORBIDDEN(res: express.Response, msg?: string, data?: any): void;
  NOT_FOUND(res: express.Response, msg?: string, data?: any): void;
  NOT_ACCEPTABLE(res: express.Response, msg?: string, data?: any): void;
  UNSUPPORTED_MEDIA(res: express.Response, msg?: string, data?: any): void;
  TOO_MANY_REQUESTS(res: express.Response, msg?: string, data?: any): void;

  /*----------  SERVER  ----------*/

  SERVER_ERROR(res: express.Response, msg?: string, data?: any): void;
  NOT_IMPLEMENTED(res: express.Response, msg?: string, data?: any): void;
  SERVICE_UNAVAILABLE(res: express.Response, msg?: string, data?: any): void;
  UNKNOWN_ERROR(res: express.Response, msg?: string, data?: any): void;
}
