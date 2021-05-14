const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = mongoose.model('Post')
const Comp = mongoose.model('Comp')
const Announce = mongoose.model('Announce')

const { postValidation, complainValidation } = require('../validation')


// GETTING ALL APPOINTMENT
router.get('/allpost', (req, res) => {
    Post.find() //getting all the booked appointments
        .then(posts => {
            res.json({ posts })
        })
        .catch(err => {
            res.json(err)
        })
})

// GETTING ALL COMPLAINS
router.get('/complains', (req, res) => {
    Comp.find()  //getting all the booked complains
        .then(posts => {
            res.json({ posts })
        })
        .catch(err => {
            res.json(err)
        })
})


// GETTING ALL ANNOUNCEMENT
router.get('/announcements', (req, res) => {
    Announce.find().sort({ _id: -1 })  //getting all the booked announcement
        .then(posts => {
            res.json({ posts })
        })
        .catch(err => {
            res.json(err)
        })
})


// THE SECTION OF THE COMPLAIN
router.post('/complain', (req, res) => {
    const { firstname, lastname, department, matric, level, message } = req.body

    if (!firstname || !lastname || !department || !matric || !level || !message) {
        return res.status(400).json({ error: "The fields are empty" })
    }

    const { error } = complainValidation(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }

    let newFirstname = firstname.toLowerCase().replace(/ /g, '')
    let newLastname = lastname.toLowerCase().replace(/ /g, '')
    let newMatric = matric.replace(/ /g, '')

    Comp.findOne({ matric: matric })
        .then(matrics => {
            if (matrics) {
                return res.status(400).json({ error: "You have alreadily complained" })
            }

            const complain = new Comp({
                firstname: newFirstname,
                lastname: newLastname,
                department,
                matric: newMatric,
                level,
                message,
            })

            complain.save()
                .then(result => {
                    res.json({ data: result })
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
        })
})


// THE SECTION OF THE COMMENT
router.put('/comment', (res, req) => {

    // console.log(req.body)
    Comp.findByIdAndUpdate(req.body, {
        $push: { comments: comment }
    }, {
        new: true
    })
        .populate("comments.postBy", "_id")
        .populate("postedBy", "_id")
        .exec((err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            }
            else {
                res.json(result)
            }
        })
})


// THE SECTION OF THE APPOINTMENT
router.post('/createpost', (req, res) => {

    const { firstname, lastname, department, matric, time, level, message, gender } = req.body

    if (!firstname || !lastname || !department || !matric || !time || !level || !message || !gender) {
        return res.status(400).json({ error: "The fields are empty" })
    }

    // const { error } = postValidation(req.body);
    // if (error) {
    //     return res.status(400).json({ error: error.details[0].message })
    // }

    let newFirstname = firstname.toLowerCase().replace(/ /g, '')
    let newLastname = lastname.toLowerCase().replace(/ /g, '')
    let newMatric = matric.replace(/ /g, '')

    Post.findOne({ matric: matric })
        .then(user => {
            if (user) {
                return res.status(400).json({ error: "You Have already Booked an Appoinment Today" })
            }
        })



    Post.findOne({ time: time, })
        .then(savedTime => {
            if (savedTime) {
                return res.status(400).json({ error: "Time has been taken, choose another time" })
            }

            const post = new Post({
                firstname: newFirstname,
                lastname: newLastname,
                department,
                matric: newMatric,
                time,
                level,
                message,
                gender,

            })

            post.save()
                .then(result => {
                    res.json({ post: result })
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
        })
})


// THE SECTION OF THE ANNOUNCEMENT

router.post('/announcement', (req, res) => {
    const { title, message, category } = req.body

    if (!title || !message || !category) {
        return res.status(400).json({ error: "The fields are empty" })
    }

    const announcement = new Announce({
        title,
        message,
        category,
    })

    announcement.save()
        .then(result => {
            res.json({ post: result })
        })
        .catch(err => {
            console.log(err)
        })
})


// THE SECTION OF THE DELETE
router.delete('/deletepost/:postId', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.postId)

        res.json({ msg: "Deleted Successfully" })
    }
    catch (err) {
        console.log("cannot delete")
    }
})


router.delete('/delete/:postId', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.postId)

        res.json({ msg: "Deleted Successfully" })
    }
    catch (err) {
        console.log("cannot delete")
    }
})




module.exports = router