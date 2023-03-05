const express = require('express')
const router = express.Router()

var focusLevel;
var tirednessLevel;
var happinessLevel;
var alpha;
var beta;

router.get('/', async(req,res) => {
    try {
        const brainData = {
            "alpha": alpha, 
            "beta": beta, 
            "focusLevel": focusLevel, 
            "tirednessLevel": tirednessLevel, 
            "happinessLevel": happinessLevel
        }
        res.json(brainData)
    } catch(err) {
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    try {
        alpha = req.body.alpha
        beta = req.body.beta
        focusLevel = req.body.focusLevel
        tirednessLevel = req.body.tirednessLevel 
        happinessLevel = req.body.happinessLevel

        const brainData = {
            "alpha": alpha, 
            "beta": beta,
            "focusLevel": focusLevel, 
            "tirednessLevel": tirednessLevel, 
            "happinessLevel": happinessLevel,
        }
        res.json(brainData)
    } catch(err) {
        res.send('Error')
    }
})

module.exports = router
