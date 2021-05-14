const mongoose = require('mongoose')


const announceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }

})


mongoose.model("Announce", announceSchema)
