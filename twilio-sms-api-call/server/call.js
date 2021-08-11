const accountSid = Account_SID;
const authToken = Account_AuthToken;

const client = require('twilio')(accountSid, authToken);

const makeCall = (phone, message) => {

    client.calls
      .create({
         twiml: '<Response><Say>'+ message + 'Ahoy there!</Say></Response>',
         to: phone,
         from: '+12678438755'
       })
      .then(call => console.log(call.sid))
      .then(console.log('call done'));
}

module.exports = makeCall;
