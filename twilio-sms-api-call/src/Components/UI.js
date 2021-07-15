// import React, { Component } from 'react';


// class UI extends Component {

//   state = {
//     text: {
//       recipient: '',
//       textmessage: ''
//     }
//   }

//   sendText = _ => {
//     const { text } = this.state;
//     //pass text message GET variables via query string
//     fetch(`http://localhost:4004/sendSms`, {
//       method: "POST", body: JSON.stringify({
//         phone: text.recipient,
//         message: text.textmessage
//       }), headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     })
//       .catch(err => console.error(err))
//   }

//   render() {
//     const { text } = this.state;
//     const spacer = {
//       margin: 8
//     }
//     const textArea = {
//       borderRadius: 4
//     }
//     return (
//       <div className="App">
//         <div style={{ marginTop: 10 }} >
//           <h2> Send Text Message </h2>
//           <label> Your Phone Number </label>
//           <br />
//           <input value={text.recipient}
//             onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />
//           <div style={spacer} />
//           <label> Message </label>
//           <br />
//           <textarea rows={3} value={text.textmessage} style={textArea}
//             onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />
//           <div style={spacer} />
//           <button onClick={this.sendText}> Send Text </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default UI;


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
    fetch(`http://localhost:4004/sendSms`, {
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