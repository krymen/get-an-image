const express = require('express')
const bodyParser = require('body-parser')
const extractImageFromUrl = require('./extractImageFromUrl');

const app = express()

app.use(bodyParser.json())
app.post('/', async (req, res) => {
    if (!req.body.url) {
        return res.status(400).send({ message: "URL is required" })
    }

    try {
        const imageUrl = await extractImageFromUrl(req.body.url)
    return res.status(200).send({image: imageUrl})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

module.exports = app