const UserVerificationEmail = require('../models/user-verification-email')
const transporter = require('../util/mailer')
const crypto = require('crypto')

module.exports = {

    sendVerificationMail: (req, user) => {

        crypto.randomBytes(16, (err, buffer) => {

            const hash = buffer.toString('hex')

            UserVerificationEmail.create({
                user: user,
                hash: hash
            }).then(() => {

                transporter.sendMail({
                    to: user.email,
                    subject: 'Complete Registration',
                    html: `
                        <p>Hi ${user.firstName + ' ' + user.lastName}. to complete your registration follow the link bellow:</p>
                        <a href="${'http://' + req.headers.host}/api/auth/verify-email/${hash}">Click here to activate your account</a>
                    `
                }, function(err) {
                    if (err) {
                        throw err
                    }
                })

            })

        })

    }

}