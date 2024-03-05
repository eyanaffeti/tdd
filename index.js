const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Bienvenue sur notre API !');
});

module.exports = app;

