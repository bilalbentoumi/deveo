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

    oneBySlug(req, res) {

        const { slug } = req.params

        Post.findOne({ slug }).populate('user').exec((err, post) => {

            if (err) {
                return res.status(500).json({ status: 'error', message: 'Error on the server' })
            }

            if (!post) {
                return res.status(404).json({ message: 'Post not found' })
            }

            res.status(200).json({ status: 'success', data: post })
        })

    },

    create(req, res) {

        const { title, content, slug, poster } = req.body

        Post.create({
            title,
            content,
            slug,
            poster,
            user: req.userId
        }).then(post => {
            res.status(200).json({ status: 'success', message: 'Successfully created.', data: post })
        }).catch(err => {
            res.status(301).json({ status: 'error', message: 'Operation failed.' })
        })

    },

}