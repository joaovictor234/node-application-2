const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
  res.render('home', {pageTitle: 'Home'})
})

module.exports = route