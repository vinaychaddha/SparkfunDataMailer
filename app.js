/**
 * This is a cronjob script to request a json from SparkFun Api and mail the latest one.
 */

var sparkFunDataService = require('./app/sparkFunDataService');
var emailer = require('./app/emailer');

sparkFunDataService.getTop(function (err, res) {
  if (err) console.log(err);
  else {
    emailer.send(JSON.stringify(res), function (err, res) {
      if (err) console.log(err);
      else console.log(res);
    });
  }
});