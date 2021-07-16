const express = require('express');
const bodyParser = require('body-parser');
const sendSms = require('./twilio');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = 4008;

// Create users endpoint
app.post('/sendSMS', (req, res) => {
  const { phone, message } = req.body;

  sendSms(phone, message);

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