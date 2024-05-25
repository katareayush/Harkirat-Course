const express = require('express')

const port = 3000

app.get('/', function(req, res)  {
  res.send('Hello World!')
})
app.get('/route-handler', function(req, res)  {
  res.send('Hello World! from route handler')
})

app.listen(port)

