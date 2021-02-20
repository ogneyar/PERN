require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const models = require('./models/models')
const router = require('./routes/index')

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
    // console.log("log")
    // res.send("PERN - приветствует тебя!")
    res.status(200).json({message: 'PERN - WORKING!!!'})
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
