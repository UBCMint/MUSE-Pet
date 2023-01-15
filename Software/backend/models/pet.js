const mongoose = require('mongoose')


const petSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    happinessLevel: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    isDead: { // TODO: if too old, it dies, map age to prob to die
        type: Boolean,
        required: true,
        default: false
    },
    birthDate: {
        date: Date,
        required: true,
        default: Date.now()
    },
    isSick: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Pet', petSchema)