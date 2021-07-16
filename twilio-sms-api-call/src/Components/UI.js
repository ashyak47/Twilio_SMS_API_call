import React, { useState } from 'react';

const spacer = {
  margin: 8
};
const textArea = {
  borderRadius: 4
};

const UI = () => {
  // Declare a new state variable, which we'll call "count"
  const [message, setMessage] = useState({
    recipient: '',
    textmessage: ''
  }
  );

  const sendText = _ => {
    const { recipient, textmessage } = message;
    //pass text message GET variables via query string
    fetch(`http://localhost:4008/sendSms`, {
      method: "POST", body: JSON.stringify({
        phone: recipient,
        message: textmessage
      }), headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <div style={{ marginTop: 10 }} >
        <h2> Send Text Message </h2>
        <label> Your Phone Number </label>
        <br />
        <input value={message.recipient}
          onChange={e => { setMessage({ ...message, recipient: e.target.value }); }} />
        <div style={spacer} />
        <label> Message </label>
        <br />
        <textarea rows={3} value={message.textmessage} style={textArea}
          onChange={e => { setMessage({ ...message, textmessage: e.target.value }); }} />
        <div style={spacer} />
        <button onClick={() => sendText()}> Send Text </button>
      </div>
    </div>
  );
};
export default UI;