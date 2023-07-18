const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UsersModel = require('../models/user.model');


/* GET users listing. */
router.get('/get-users', function(req, res, next) {
  UsersModel.find().then((data)=>{
    res.send({status:200,results:data})
  }).catch((err)=>{
    res.send(err)
  })
});
/* GET one user listing. */
router.get('/get-user/:id', function(req, res, next) {
  var idParams = req.params.id;
  UsersModel.find({ userId: idParams })
    .then((data) => {
      if (data) {
        res.status(200).json({ status: 200, results: data });
      } else {
        res.status(404).json({ status: 404, message: 'User not found' });
      }
    })
    .catch((err) => {
      res.status(500).json({ status: 500, error: err.message });
    });
});


/* ADD user listing. */

router.post('/add-user', function(req, res) {
  console.log(req.body);
  if (!req.body.userId && !req.body.username && !req.body.email && !req.body.password && !req.body.fullName && !req.body.birthday) {
    return res.status(400).json({ status: 400, message: "Missing required fields" });
  }

  let newUser = new UsersModel({
    userId: req.body.id,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    fullName: req.body.fullName,
    birthday: req.body.birthday,
    createdAt: Date.now()
  });

  newUser.save()
    .then((newUser) => {
      res.status(200).json({ status: 200, message: "User has been added", userObj: newUser });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, error: err.message });
    });
});


/* UPDATE user listing. */
/* DELETE user listing.*/

module.exports = router;
