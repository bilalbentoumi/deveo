const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    hash: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    collection: 'user_verification_emails',
    timestamps: true
})

module.exports = mongoose.model('UserVerificationEmail', userSchema)