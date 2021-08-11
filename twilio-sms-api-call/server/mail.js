const sgMail = require('@sendgrid/mail')

const sendEmail = (phone, message, email) => {

    sgMail.setApiKey(API_Key);
    const msg = {
        to: email, // Change to your recipient
        from: 'ashyak47mi5@gmail.com', // Change to your verified sender
        subject: 'Forwarding message from :' + phone,
        text: message,
    };
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        });
}


module.exports = sendEmail;
