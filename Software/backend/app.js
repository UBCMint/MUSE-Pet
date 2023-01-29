const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/PetDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const petRouter = require('./routes/pet')
app.use('/pet', petRouter)

app.listen(9000, () => {
    console.log('Server started')
})