const express = require('express');
const route = express.Router();

const users = [];

route.post('/add-user', (req, res, next) => {
  users.push({username: req.body.user})
  console.log(users)
  res.redirect('/')
})

route.get('/users', (req, res, next) => {
  res.render('users', {pageTitle: 'Users', users: users});
})

module.exports = route;