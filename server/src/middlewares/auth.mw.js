const jwt = require('jsonwebtoken')

exports.authenticated = (req, res, next) => {

    if (!req.headers['authorization']) {
        return res.status(401).json({ success: false, message: 'Invalid request.' })
    }

    try {

        let authorization = req.headers['authorization'].split(' ')

        if (authorization[0] !== 'Bearer') {
            return res.status(401).json({ success: false, message: 'Invalid request.' })
        }

        req.jwt = jwt.verify(authorization[1], process.env.JWT_SECRET_KEY)

        return next()

    } catch (err) {
        return res.status(403).json({ success: false, message: 'Invalid token' })
    }

}