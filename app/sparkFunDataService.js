/**
 * This module hits sparkfun api
 * Created by prakhar on 9/13/15.
 */

var request = require('request');
var constants = require('./constants');

module.exports = {
  getAll: getAll,
  getTop: function (cb) {
    getAll(function (err, res) {
      if (err) cb(err);
      else cb(null, res[0]);
    })
  }
};

function getAll(cb) {
  request(constants.SparkFunStreamURI, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      cb(null, JSON.parse(body));
    } else if (error) {
      cb(error);
    } else {
      cb("StatusCode = " + response.statusCode);
    }
  });
}