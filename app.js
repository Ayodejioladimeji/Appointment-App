const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const { MONGOURI } = require('./config/keys')
const path = require('path')



// connecting to the database with mongoose
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => console.log('connected to the database'))

mongoose.connection.on('error', (err) => console.log('error connecting', err))


// GETTING THE MODEL FROM THE FILE
require('./models/user')
require('./models/post')
require('./models/complain')
require('./models/announcement')


// MAKE SURE YOU USE THIS BEFORE THE ROUTES
app.use(express.json())


// GETTING THE ROUTER FROM THE ROUTES FOLDER
app.use(require('./routes/auth'))
app.use(require('./routes/post'))


// declaring the middleware
// const customMiddleware = (req, res, next) => {
//     console.log("middleware executed")
//     next()
// }


// using the middleware
// app.use(customMiddleware)


// SETTING THE ROUTES
app.get('/', (req, res) => {
    res.send("hello world")
})


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
        // path.resolve
    })
}


app.listen(PORT, () => (console.log('server is up and running on', PORT)))