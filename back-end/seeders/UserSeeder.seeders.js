
var express = require('express');
const UserModule = require('../models/user.model');
const bcrypt = require('bcrypt');
var router = express.Router();


router.post('/seed-user', function (req, res) {

    admin="adminadmin"
    bcrypt.hash(admin, 10) // Use 10 salt rounds
      .then((hash) => {
         
     
    var userItems = [
        {
            userId: 1,
            username: 'admin',
            email: 'admin@admin.com',
            password: hash,
            fullName: "admin",
            role: "admin",
           
        }
    ]

    const userModule = userItems.map(item => new UserModule(item));

    // Save each menu module to the database
    Promise.all(userModule.map(userModule => userModule.save()))
      .then(savedModules => {
        res.status(200).json({ status: true, message: 'Seeders success', results: savedModules });
      })
      .catch(err => {
        res.status(500).json({ status: false, message: err.message, code: err.code, key: err.keyValue });
      });
    })
  });
module.exports = router;