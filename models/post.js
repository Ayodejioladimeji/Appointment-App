const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        min: 5,
        max: 15
    },
    lastname: {
        type: String,
        required: true,
        min: 5,
        max: 15
    },
    department: {
        type: String,
        required: true,
        min: 5,
        max: 15
    },
    matric: {
        type: String,
        required: true,
        min: 7,
        max: 7
    },
    time: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        maxlength: 50
    },

}, {
    timestamps: true
})


mongoose.model("Post", postSchema)