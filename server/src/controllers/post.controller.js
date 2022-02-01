const Post = require('../models/post')

module.exports = {

    all(req, res) {

        Post.find().populate('user').exec((err, posts) => {

            if (err) {
                return res.status(500).json({ status: 'error', message: 'Error on the server' })
            }

            res.status(200).json({ status: 'success', data: posts })
        })

    },

}