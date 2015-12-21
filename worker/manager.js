'use strict';

/*===============================
=            MODULES            =
===============================*/

const pool = require('../knexfile');
const knex = require('knex')(pool[ process.env.NODE_ENV ]);

const CronJob = require('cron').CronJob;

/*=====  End of MODULES  ======*/


/*===========================================================================
=                                  CRON JOBS                                =
===========================================================================*/

const SampleJob = require('./sample-cron')(CronJob, knex);

/*============================  End of CRON JOBS  ==========================*/

SampleJob.start();
