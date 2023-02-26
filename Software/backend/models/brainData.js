const mongoose = require('mongoose')

const brainDataSchema = new mongoose.Schema({
    brainWaves: [
        
    ],
    focusLevel: {
        type: Number,
        min: 0,
        max: 100,
        required: true,
        default: 50
    }
})

module.exports = mongoose.model('BrainData', brainDataSchema)