require('dotenv').config()
import express from 'express'

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    // console.log("log");
    res.send("PERN - приветствует тебя!")

})

app.listen(PORT, () => console.log(`Server run: http://localhost:${PORT}`))