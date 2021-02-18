require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
// const models = require('./models/models')

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    // console.log("log");
    res.send("PERN - приветствует тебя!")

})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync() 
        app.listen(PORT, () => console.log(`Server run: http://localhost:${PORT}`))
    }catch (e) {
        console.log(e)
    }
}

start()
