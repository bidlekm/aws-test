const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('MY SHITTY AWS WEB PAGE (HELLO WORLD)!')
})

app.listen(port, () => {
  console.log(`AWS-TEST app listening on port ${port}`)
})