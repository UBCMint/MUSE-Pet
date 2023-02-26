const express = require('express')
const router = express.Router()
const BrainData = require('../models/brainData')

router.get('/', async(req,res) => {
})

router.post('/', async(req,res) => {
    const brainData = new BrainData({
        focusLevel: req.body.focusLevel,
        brainWaves: req.body.brainWaves
    })
})