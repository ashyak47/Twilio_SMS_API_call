require('dotenv').config();

const accountSid = 'ACa73d7bec52e142cf0f6763266f22b959';
const authToken = 'c8a456a51b870842ba9dc8830d1d3a51';

const sendSms = (phone, message) => {
    debugger;
    const client = require('twilio')(accountSid, authToken);
    client.messages
        .create({
            body: message,
            from: '+12678438755',
            to: phone
        })
        .then(message => console.log(message.sid));
}

module.exports = sendSms;