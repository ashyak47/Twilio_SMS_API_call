const sgMail = require('@sendgrid/mail')

const sendEmail = (phone, message, email) => {

    sgMail.setApiKey('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');
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