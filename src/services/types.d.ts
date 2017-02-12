export interface ICODES {
  /*----------  SUCCESS  ----------*/

  SUCCESS:       number,
  CREATED:       number,
  ACCEPTED:      number,
  NO_CONTENT:    number,
  RESET_CONTENT: number,

  /*----------  REDIRECT  ----------*/

  MOVED_PERMANENTLY:  number,
  TEMPORARY_MOVED:    number,
  TEMPORARY_REDIRECT: number,
  PERMANENT_REDIRECT: number,

  /*----------  ERROR  ----------*/

  BAD_REQUEST:       number,
  UNAUTHORIZED:      number,
  FORBIDDEN:         number,
  NOT_FOUND:         number,
  NOT_ACCEPTABLE:    number,
  UNSUPPORTED_MEDIA: number,
  TOO_MANY_REQUESTS: number,
  TOKEN_EXPIRED:     number,

  /*----------  SERVER  ----------*/

  SERVER_ERROR:        number,
  NOT_IMPLEMENTED:     number,
  SERVICE_UNAVAILABLE: number,
  UNKNOWN_ERROR:       number
}
