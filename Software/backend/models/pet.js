const mongoose = require('mongoose')


const petSchema = new mongoose.Schema({
// want database with this structure 
    name: {
        type: String,
        required: true
    },
    happinessLevel: {
        type: Number,
        min: 0,
        max: 100,
        default: 50,
        required: true
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
    },
    birthday: {
        type: Date,
        required: true,
        default: Date.now()
    }

    // TODO: look into schema validation

})

module.exports = mongoose.model('Pet', petSchema)