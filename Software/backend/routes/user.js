const express = require('express')
const { Collection } = require('mongoose')
const router = express.Router()
const User = require('../models/user')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username })
        res.json(user)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.post('/login', async (req, res) => {
    try {
        const checkUserExists = await User.findOne({ username: req.body.username })
        if (checkUserExists) {
            if (req.body.password === checkUserExists.password) {
                res.json({ message: 'Login successful' })
            } else {
                res.json({ message: 'Incorrect password' })
            }
        } else {
            res.json({ message: 'User does not exist' })
        }
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.post('/register', async (req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password,
    })

    try {
        const checkUserExists = await User.findOne({
            username: req.body.username,
        })
        if (checkUserExists) {
            res.send({ message: 'User already exists' })
        } else {
            const a1 = await user.save()
            res.send({ message: 'User created', data: a1 })
        }
    } catch (err) {
        res.send('Error ' + err)
    }
})


module.exports = router