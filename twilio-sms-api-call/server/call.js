const accountSid = 'ACa73d7bec52e142cf0f6763266f22b959';
const authToken = 'c8a456a51b870842ba9dc8830d1d3a51';

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
