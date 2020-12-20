var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send("Dwadada")
})

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log("helo")
})

