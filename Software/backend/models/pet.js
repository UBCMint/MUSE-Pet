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
        max: 100,
        required: true,
        default: 50
    },
    happinessLevel: {
        type: Number,
        min: 0,
        max: 100,
        required: true,
        default: 50
    },
    isSick: {
        type: Boolean,
        required: true,
        default: false
    },
    isDead: { // TODO: if too old, it dies, map age to prob to die
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Pet', petSchema)