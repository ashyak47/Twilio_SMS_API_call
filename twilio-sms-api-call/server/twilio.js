require('dotenv').config();

const accountSid = 'ACa73d7bec52e142cf0f6763266f22b959';
const authToken = '5c5215804bb5d8cae7e52d6a15be4b4d';

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