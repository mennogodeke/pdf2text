const express = require('express')
const fs = require('fs')
const pdf = require('pdf-parse')
const app = express()
const port = 3000

module.exports = app.listen(3001);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
    res.json({"message":"Hello API"})
})

app.get('/document', (req, res) => {
  let dataBuffer = fs.readFileSync('example.pdf');
  pdf(dataBuffer).then(function(data) {
    res.send(data.text)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})