const mongoose = require('mongoose')

module.exports = () => {

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log('Connected to MongoDB')
    }).catch((err) => {
        console.log('Failed to connect to MongoDB')
    })

}