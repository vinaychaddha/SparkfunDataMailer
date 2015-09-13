/**
 * This module pushes specified html as mail to the specified email
 * Created by Prakhar on 01/09/15.
 */

var config = require('../config/config');
var mailgun = require('mailgun-js')({apiKey: config.MailGunApiKey, domain: config.MailGunDomain});

/**
 * This function takes in data in the format:
 * var data = {
 *  from: 'Excited User <me@samples.mailgun.org>',
 *  to: 'serobnic@mail.ru',
 *  subject: 'Hello',
 *  html:''
 * };
 * And a callback as function(error,body){};
 */

module.exports = {
  send: send
};

function send(data, callback) {
  mailgun.messages().send({
    from: config.SendEMail,
    to: config.ReceiveEMail,
    subject: "Daily Email Report Sparkfun : " + new Date(),
    html: data
  }, function (err, res) {
    if (err) callback(err);
    else callback(null, res);
  });
};
