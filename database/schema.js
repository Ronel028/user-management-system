
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: 'String',
        required: 'true'
    },
    email: {
        type: 'String',
        required: 'true'
    },
    age: {
        type: 'String',
        required: 'true'
    },
    gender: {
        type: 'String',
        required: 'true'
    },
    status: {
        type: 'String',
        required: 'true'
    },
    date: {
        type: 'String'
    }
})

module.exports = mongoose.model('UserProfile', UserSchema);