const express = require('express')
const { Collection } = require('mongoose')
const router = express.Router()
const User = require('../models/user')

router.get('/', async(req,res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch(err) {
        res.send('Error ' + err)
    }
})

router.get('/:username', async(req,res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch(err) {
        res.send('Error ' + err)
    }
})

// router.post('/', async (req, res) => {
//     const{username, password} = req.body 
    
//     // check 
// })

router.post('/', async (req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password,
    })
    
    try {
        // check if user exists
        const checkUserExists = await User.findOne({
            username: req.body.username,
        })
        if(checkUserExists) {
            res.send({status: 'User already exists'})
        } else {
            const a1 = await user.save()
            res.send({status: 'User created', data: a1})
        }
    } catch(err) {
        res.send({status: 400, message: 'Error'})
    }
})


module.exports = router