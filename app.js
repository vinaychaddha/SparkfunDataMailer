/**
 * This is a cronjob script to request a json from SparkFun Api and mail the latest one.
 */

var sparkFunDataService = require('./app/sparkFunDataService');
var emailer = require('./app/emailer');

sparkFunDataService.getTop(function (err, res) {
  if (err) console.log(err);
  else {
    var out = "asno : " + res.asno + ",b15sec : " + res.b15sec + ",cwater : " + res.cwater
        + ",dflow : " + res.dflow + ",eflow : " + res.eflow + ",fsoln : " + res.fsoln;
    emailer.send(out, function (err, res) {
      if (err) console.log(err);
      else console.log(res);
    });
  }
});