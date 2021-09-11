const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        index: { unique: true }
    },
    password: String,
    firstName: String,
    lastName: String,
    active: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)