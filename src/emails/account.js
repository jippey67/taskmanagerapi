const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jeroenwalta@gmail.com',
        subject: 'thanks for joining',
        text: `Welcome to the app, ${name}. Let me know how you get along.`
    })
}

module.exports = {
    sendWelcomeEmail
}