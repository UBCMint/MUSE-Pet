const express = require('express')
const router = express.Router()
const Pet = require('../models/pet')

router.get('/', async(req, res) => {
    try {
        const pets = await Pet.find()
        res.json(pets)
    }catch(error) {
        res.send("Error " + error)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const pet = await Pet.findById(req.params.id)
        res.json(pet)
    }catch(error) {
        res.send("Error " + error)
    }
})

router.post('/', async(req,res) => {
    const pet = new Pet({
        name: req.body.name,
        happinessLevel: req.body.happinessLevel,
        hungerLevel: req.body.hungerLevel,
        healthPoints: req.body.healthPoints,
        isSick: req.body.isSick,
        isDead: req.body.isDead, 
        birthday: req.body.birthday
    })

    try{
        const p1 = await pet.save() 
        res.json(p1)
    }catch(error){
        res.send("Error " + error)
    }
})

// TODO: edit more things
router.patch('/:id', async(req, res) => {
    try {
        const pet = await Pet.findByIdAndUpdate(req.params.id, req.body);
        const p1 = await pet.save()
        res.json(p1)
    } catch(error) {
        res.send("error " + error)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const pet = await Pet.findById(req.params.id) 
        const p1 = await pet.remove()
        res.json(p1)
    } catch(error) {
        res.send("error " + error)
    }
})

module.exports = router