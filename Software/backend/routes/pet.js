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
        happinessLevel: req.body.happinessLevel,
        isDead: req.body.isDead,
        birthDate: req.body.birthDate
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
        const pet = await Pet.findById(req.params.id) 
        pet.isDead = req.body.isDead
        const a1 = await pet.save()
        res.json(a1)   
    } catch(err) {
        res.send('Error')
    }

})

module.exports = router