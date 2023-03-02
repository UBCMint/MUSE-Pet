const express = require('express')
const router = express.Router()

let focusLevel = 0
let alpha = 0
let beta = 0

router.get('/', async(req,res) => {
    try {
        const brainData = {"focusLevel": focusLevel, "alpha": alpha, "beta": beta}
        res.json(brainData)
    } catch(err) {
        res.send('Error ' + err)
    }
})
