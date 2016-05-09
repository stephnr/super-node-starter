declare namespace env {
  /**
   * Defines a database configuration object
   * @type {Object}
   */
  interface Database {
    /**
     * Defines the database engine (see Sequelize supported dialects)
     * @type {string}
     */
    engine: string;
    /**
     * Contains the database connection details
     */
    connection: {
      /**
       * The URL to locate the database
       * @type {string}
       */
      host: string;
      /**
       * The usernmae of the database account to login as
       * @type {string}
       */
      user: string;
      /**
       * The password for the database account to login as
       * @type {string}
       */
      password: string;
      /**
       * The name of the database schema to use
       * @type {string}
       */
      database: string;
      /**
       * The charset of the database schema
       * @type {string}
       */
      charset: string;
    };
    /**
     * The minimum number of database connections to maintain
     * @type {number}
     */
    poolMin: number;
    /**
     * The maximum number of database connections to maintain
     * @type {number}
     */
    poolMax: number;
  }

  /**
   * Defines a logging configuration object
   * @type {Object}
   */
  interface Logging {
    console: LoggingTransporter;
    /**
     * Flag to specify if the logger should exit on error
     * @type {boolean} */
    exitOnError: boolean;
    /**
     * Custom logging levels to use
     * @type {Object}
     */
    levels: {
      debug: number;
      info: number;
      warn: number;
      error: number;
    };
    /**
     * Defines which transports will be used
     * @type {Object}
     */
    use: {
      console: boolean;
    };
  }

  /**
   * Defines a console transportation object
   */
   interface LoggingTransporter {
    /**
     * The logging level (e.g. debug, info, warn, error)
     * @type {string}
     */
    level: string;
    /**
     * Date time format string applied on log statements
     * @type {string}
     */
    format: string;
    /**
     * Sets the colors of the console outputs by level
     */
    colors: {
      debug: string;
      info: string;
      warn: string;
      error: string;
    };
  }

  /**
   * Defines a server configuration object
   * @type {Object}
   */
  interface Server {
    /**
     * The port number to run the web application at
     * @type {string}
     */
    port: string;
    /**
     * The Node Environment to execute under
     * @type {string}
     */
    env: string;
  }
}

/*=============================================>>>>>
= MODULES EXPORTED =
===============================================>>>>>*/

declare namespace WebEnvironment {
  interface DatabaseConfig extends env.Database {}
  interface LoggingConfig extends env.Logging {}
  interface ServerConfig extends env.Server {}
  interface LoggingTransporter extends env.LoggingTransporter {}
}

export default WebEnvironment;

/*= End of MODULES EXPORTED =*/
/*=============================================<<<<<*/
