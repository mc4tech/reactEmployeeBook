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
  // Hash Password
  bcrypt.genSalt(10, (err, salt) =>
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      // set password to hashed
      newUser.password = hash;
      // save user
      newUser
        .save()
        .then(user => {
          req.flash('success_msg', 'You are now registered and can login');
          res.json(user);
        })
        .catch(err => console.log(err));
    })
  );
});

module.exports = router;
