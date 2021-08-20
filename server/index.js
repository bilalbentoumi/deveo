const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 5000

app.use('/', express.static(path.join(__dirname, 'www')))

app.get('/api', (req, res) => {
    res.send('Hello from api!')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})