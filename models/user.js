const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    date: {
        type: Date,
        default: Date.now()
    },
    nonprofits: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Nonprofit'
    }],
    contacts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact'
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;