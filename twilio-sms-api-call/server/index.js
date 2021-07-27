const express = require('express');
const bodyParser = require('body-parser');
const sendSms = require('./twilio');
const cors = require('cors');
const sendEmail = require('./mail');
const makeCall = require('./call');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = 4008;

//Post for Email and Message
app.post('/sendSmsAndEmail', (req, res) => {
  const { phone, message, email } = req.body;

  sendSms(phone, message);
  sendEmail(phone, message, email);
  makeCall(phone, message);


  res.status(201).send({
    message: 'Message sent successfully.',
  })
});


app.get('/', (req, res) => {
  res.status(201).send({
    message: 'Message sent successfully.',
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;