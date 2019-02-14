const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// User model
const User = require('../models/User');

router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  const newUser = new User({
    name,
    email,
    password
  });
  newUser
    .save()
    .then(user => {
      console.log('user posted');
      res.json(user);
    })
    .catch(err => console.log(err));
});

module.exports = router;
