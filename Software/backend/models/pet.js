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
        required: true
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
    },
    birthday: {
        type: Date,
        // date: Date,
        required: true
    }

})

module.exports = mongoose.model('Pet', petSchema)