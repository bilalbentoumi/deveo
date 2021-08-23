const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const transporter = require('../util/mailer')

module.exports = {

    verify(req, res) {

        jwt.verify(req.body.token, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) {
                res.status(403).json({ valid: false })
            }
            res.status(200).json({ valid: true })
        })

    },

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

            transporter.sendMail({
                from: 'Devep App <deveo.mailer@gmail.com>',
                to: req.body.email,
                subject: 'Complete Registration',
                text: 'Hi there. to complete your registration follow the link bellow:'
            }, function(err, info) {
                if (err) {
                    throw err;
                } else {
                    console.log('Email successfully sent!');
                }

                res.status(200).json({ status: 'success', message: 'Successfully registered!', user: user })

            })

        }).catch(err => {
            res.status(301).json({ status: 'error', message: 'Registration failed.' })
        })

    }

}