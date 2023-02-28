const express = require('express')
const router = express.Router()

router.get('/', async(req,res) => {
})

router.post('/', async(req,res) => {
    const brainData = new {
        focusLevel: req.body.focusLevel,
        brainWaves: req.body.brainWaves
    }
})