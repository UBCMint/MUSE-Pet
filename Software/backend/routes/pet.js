const express = require('express')
const router = express.Router()
const Pet = require('../models/pet')

router.get('/', async(req,res) => {
    try {
        const pets = await Pet.find()
        res.json(pets)
    } catch(err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try {
        const pet = await Pet.findById(req.params.id)
        res.json(pet)
    } catch(err) {
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const pet = new Pet({
        name: req.body.name,
        birthDate: req.body.birthDate,
        focusLevel: req.body.focusLevel,
        tirednessLevel: req.body.tirednessLevel,
        happinessLevel: req.body.happinessLevel,
        isDead: req.body.isDead,
        isSick: req.body.isSick
    })

    try {
        const a1 =  await pet.save() 
        res.json(a1)
    } catch(err) {
        res.send('Error')
    }
})

router.patch('/:id', async(req,res) => {
    try {
        const pet = await Pet.findByIdAndUpdate(req.params.id, req.body)
        const a1 = await pet.save()
        res.json(a1)   
    } catch(err) {
        res.send('Error')
    }
})

router.delete('/:id', async(req,res) => {
    try {
        const pet = await Pet.findByIdAndDelete(req.params.id)
        res.json(pet)
    } catch(err) {
        res.send('Error')
    }
})

module.exports = router