const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

if (fs.existsSync('.env')) {
    require('dotenv').config()
}

const routes = require('./src/routes')
const dbConnect = require('./src/database/connect')
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

dbConnect()

routes(app)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})