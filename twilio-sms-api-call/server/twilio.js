require('dotenv').config();

const accountSid = Account_SID;
const authToken = Account_AuthToken;

const sendSms = (phone, message) => {
    const client = require('twilio')(accountSid, authToken);
    client.messages
        .create({
            body: message,
            from: '+12678438755',
            to: phone
        })
        .then(message => console.log(message.sid))
        .then(console.log('SMS sent'));
}

module.exports = sendSms;
