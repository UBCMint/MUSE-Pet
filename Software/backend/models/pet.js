const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    focusLevel: {
        type: Number,
        min: 0,
        max: 5,
        required: true,
        default: 0
    },
    tirednessLevel: {
        type: Number,
        min: 0,
        max: 5,
        required: true,
        default: 0
    },
    happinessLevel: {
        type: Number,
        min: 0,
        max: 5,
        required: true,
        default: 5
    },
    isSick: {
        type: Boolean,
        required: true,
        default: false
    },
    isDead: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Pet', petSchema)