
// THE SCHEMA OF THE SITE
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})

mongoose.model("User", userSchema)