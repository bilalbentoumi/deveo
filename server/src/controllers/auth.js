const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const {sendVerificationMail} = require('../util/mail-verification')
const UserVerificationEmail = require('../models/user-verification-email')

module.exports = {

    login(req, res) {

        if (!req.body.email || !req.body.password) {
            return res.status(403).send('email and password are required.')
        }

        User.findOne({ 'email': req.body.email }, function (err, user) {

            if (err) {
                return res.status(500).send('Error on the server.')
            }

            if (!user) {
                return res.status(404).send('No user found.')
            }

            if (!bcrypt.compareSync(req.body.password, user.password)) {
                return res.status(401).json({ auth: false, token: null })
            }

            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: 86400 /* expires in 24 hours*/ })

            res.status(200).json({ auth: true, token: token, user: user })

        });

    },

    register(req, res) {

        if (!req.body.email || !req.body.password) {
            return res.status(403).send('email and password are required.')
        }

        User.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 12),
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }).then(user => {
            sendVerificationMail(req, user)
            res.status(200).json({ status: 'success', message: 'Successfully registered.', user: user })

        }).catch(err => {
            res.status(301).json({ status: 'error', message: 'Registration failed.' })
        })

    },

    verify(req, res) {

        if (!req.body.hash) {
            return res.status(403).send('Verification hash is required.')
        }

        UserVerificationEmail.findOne({ hash: req.body.hash }).populate('user').exec((err, result) => {

            if (!result) {
                return res.status(404).send('Verification hash is incorrect.')
            }

            let user = result.user

            if (!user) {
                return res.status(404).send('User not found.')
            }

            user.active = true

            user.save().then(() => {
                result.delete()
                res.send({ status: 'success', message: 'Account verified successfully.' })
            })

        })

    }

}