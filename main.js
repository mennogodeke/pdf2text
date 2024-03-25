const express = require('express')
const fs = require('fs')
const pdf = require('pdf-parse')
const app = express()
const port = 3000
const upload = require("express-fileupload")
app.use(upload())
app.set('view engine', 'ejs')

module.exports = app.listen(3001);

app.get('/', (req, res) => {
  res.render('new.ejs');
})

app.post('/documents', async (req, res) => {

  document = req.files.document
  console.log(document)
  pdf(document.data).then(function(data) {
    res.send(data.text)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})