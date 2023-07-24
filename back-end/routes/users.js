const express = require('express');
const bcrypt = require("bcrypt")
const saltRounds = 10
const router = express.Router();
const mongoose = require('mongoose');
const UsersModel = require('../models/user.model');


// program to generate random strings and numbers

function generateString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let newPassword = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    newPassword += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return bcrypt.hash(newPassword, 10) // Use 10 salt rounds
    .then((hash) => {
      return { "hash": hash, "newPassword": newPassword };
    });
}








/* GET users listing. */
router.get('/get-users', function (req, res, next) {

  UsersModel.find().then((data) => {
    res.send({ status: 200, results: data })
  }).catch((err) => {
    res.send(err)
  })
});


router.post('/login-user', function (req, res, next) {
  UsersModel.findOne({ email: req.body.email })
    .then((data) => {
      if (data != null) {
        // use bcrypt.compare() to compare the user's password with the hash
        bcrypt.compare(req.body.password, data.password)
          .then((match) => {
            if (match) {
              res.send({ status: true, results: data });
            } else {

              res.send({ status: false });
            }
          })
          .catch((err) => console.error(err.message));
      } else {
        res.send({ status: false });
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

/* ADD user listing. */

router.post('/add-user', function (req, res) {

  bcrypt
    .hash(req.body.password, saltRounds)
    .then(hash => {
      userHash = hash

      UsersModel.find().then((data) => {
        const idInc = data.length
        console.log(data.length)


        console.log(req.body);
        if (!req.body.username && !req.body.email && !req.body.password && !req.body.fullName && !req.body.birthday) {
          return res.status(400).json({ status: 400, message: "Missing required fields" });
        }

        let newUser = new UsersModel({
          userId: idInc + 1,
          username: req.body.username,
          email: req.body.email,
          role: req.body.role,
          password: userHash,
          fullName: req.body.fullName,
          birthday: req.body.birthday,
          createdAt: Date.now()
        });


        newUser.save()
          .then((newUser) => {
            res.status(200).json({ status: true, message: "User has been added", results: newUser });
          })
          .catch((err) => {
            res.status(500).json({ status: false, message: err.message, code: err.code, key: err.keyValue });
          });
      })
    })
});




/* UPDATE user listing. */


router.put('/edit-user/:id', function (req, res) {
  console.log(req.params.id);
  var value = req.body
  console.log(value);
  var userId = { userId: req.params.id }
  console.log(userId);
  UsersModel.findOneAndUpdate(userId, value)
    .then((data) => {
      res.send({ status: 200, results: data })
    })
    .catch((err) => {
      res.send(err)
    })
  console.log("user id:", userId);


});
/* DELETE user listing.*/

router.delete('/delete-user/:id', function (req, res) {



  var userId = { userId: req.params.id }
  // console.log(studentId);
  UsersModel.deleteOne(userId)
    .then((data) => {
      res.send({ status: 200, results: data })
    })
    .catch((err) => {
      res.send(err)
    })



});
router.post('/reset-password', function (req, res) {
  const email = req.body.email;
  generateString(8)
    .then((result) => {
      var update = {
        password: result.hash, // Store the hashed password in the update object
        updatedAt: Date.now()
      };
      var filter = { email: email };
      UsersModel.findOneAndUpdate(filter, update)
        .then((data) => {
          if (data != null) {
            console.log(data);
            res.send({ status: 200, results: data, new_password: result.newPassword });
          } else {
            res.send({ key: { "email": req.body.email }, code: 404, status: false, results: data });
          }
        })
        .catch((err) => {
          res.send(err);
        });
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
