var createError = require('http-errors');
var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send("Dwadada")
})


module.exports = app;
