'use strict';

module.exports = (CronJob, knex) => {
  return new CronJob('*/5 * * * * *', () => {
    // Called every 5 seconds
    console.log('Hello World!');
  }, () => {
    /* This function is executed when the job stops */
  });
};
