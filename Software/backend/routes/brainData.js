const express = require('express')
const router = express.Router()

var focusLevel;
var alpha;
var beta;

router.get('/', async(req,res) => {
    try {
        const brainData = {"focusLevel": focusLevel, "alpha": alpha, "beta": beta}
        res.json(brainData)
    } catch(err) {
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    try {
        focusLevel = req.body.focusLevel
        alpha = req.body.alpha
        beta = req.body.beta
        const brainData = {"focusLevel": focusLevel, "alpha": alpha, "beta": beta}
        res.json(brainData)
    } catch(err) {
        res.send('Error')
    }
})

module.exports = router
