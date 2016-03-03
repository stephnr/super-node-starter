/// <reference path="../../typings/main/ambient/winston/winston.d.ts"/>

/*=============================================>>>>>
= INTERFACES =
===============================================>>>>>*/

declare module 'environment' {
  export interface database {
    engine: any;
    connection: {
      host: any;
      user: any;
      password: any;
      database: any;
      charset: any;
      ssl: any;
    };
    poolMin: any;
    poolMax: any;
  }

  export interface logging {
    exitOnError: any;
    use: {
      console: any;
    };
    console: {
      level:  any;
      format: any;
      colors: any;
    };
    levels: {
      debug: any;
      info:  any;
      warn:  any;
      error: any;
    };
  }

  export interface server {
    port: any;
    env:  any;
  }
}

/*= End of INTERFACES =*/
/*=============================================<<<<<*/
