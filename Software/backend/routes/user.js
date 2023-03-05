const express = require('express')
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
        const user = await User.findById(req.params.username)
        res.json(user)
    } catch(err) {
        res.send('Error ' + err)
    }
})

router.post('/', async (req, res) => {
    const{username, password} = req.body 
    
    try {
        const checkUser = await User.findOne({username: username})
        if (checkUser) {
            res.json({message: "user already exists"})
            
        } else {
            res.json({message: "user does not exist"})
        }
    } catch (err) {
        res.json({message: "user does not exist"})
    }
})

router.post("/signup", async (req, res) => {
    const{username, password} = req.body 

    const user = new User({
        username: username,
        password: password
    })
    
    try {
        const checkUser = await User.findOne({username: username})
        if (checkUser) {
            res.json({message: "user already exists"})
            
        } else {
            res.json({message: "new user created"})
            const a1 = await user.save()
            res.json(a1)
        }
    } catch (err) {
        res.json({message: "user does not exist"})
    }
})


module.exports = router