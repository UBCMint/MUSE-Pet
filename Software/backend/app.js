const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/PetDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

// con.on("open", function(){
//     console.log("connected...")
// })

con.on("open", () => {
    console.log("connected...")
})

app.use(express.json())

const petRouter = require('./routes/pets')
app.use('/pets', petRouter)

app.listen(9000, () => {
    console.log("server started")
})