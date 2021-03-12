const mongoose = require('mongoose')


const compSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    matric: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },

})


mongoose.model("Comp", compSchema)



// {
//     "firstname": "ayodeji",
//     "lastname" : "oladimeji",
//     "department" : "computer science",
//     "matric": "Nou12121212",
//     "time" : "12pm",
//     "level" : "100l",
//     "photo" : "yemi.jpeg",
//     "message": "i need to talk to you"

// }