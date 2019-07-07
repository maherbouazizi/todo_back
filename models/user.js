const mongoose = require('mongoose')
const validator = require('validator')

var userSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        minlength: 2
    },
    prenom: {
        type: String,
        required: true,
        minlength: 2
    },
    telephone: {
        type: String,
        required: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        minlength: 2,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'email invalide'
        }
    },
    motdepasse: {
        type: String,
        required: true,
        minlength: 8
    },
    tokens: {
        access: {
            type: String,
        },
        token: {
            type: String,
        }
    }
})

var User = mongoose.model('User', userSchema)

module.exports = { User }           