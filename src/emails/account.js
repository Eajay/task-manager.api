const sgMail = require('@sendgrid/mail')
// const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'yijiangzheng@gwu.edu',
//     from: 'yijiangzheng@gwu.edu',
//     subject: "This is my first creation",
//     text: 'I hope this one actually get to you.'
// })   

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'yijiangzheng@gwu.edu',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'yijiangzheng@gwu.edu',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

// sendWelcomeEmail('yijiangzheng@gwu.edu', 'Yijiang Zheng')

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}