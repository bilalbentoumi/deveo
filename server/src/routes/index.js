const express = require("express")
const AuthController = require('../controllers/auth')
const path = require('path')

module.exports = (app) => {

    const router = express.Router()

    router.get('/', (req, res) => {
        res.send('Welcome to api.')
    })

    /* Auth Routes */
    router.post('/auth/verify', AuthController.verify)
    router.post('/auth/login', AuthController.login)
    router.post('/auth/register', AuthController.register)

    app.use('/', express.static(path.join(path.dirname(require.main.filename), 'www')))

    /* Use Router in App */
    app.use('/api', router)

    app.get('/*', (req, res) => {
        try {
            res.sendFile(path.join(path.dirname(require.main.filename), 'www', 'index.html'))
        } catch (err) {
            res.json({ success: false, message: 'Something went wrong' })
        }
    })

}