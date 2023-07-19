const express = require('express');
const bcrypt = require("bcrypt")
const saltRounds = 10
const router = express.Router();
const mongoose = require('mongoose');
const UsersModel = require('../models/user.model');
const password = "Admin@123"






/* GET users listing. */
router.get('/get-users', function(req, res, next) {
  
  UsersModel.find().then((data)=>{
    res.send({status:200,results:data})
  }).catch((err)=>{
    res.send(err)
  })
});


router.post('/login-user', function(req, res, next) {
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
      console.log(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

/* ADD user listing. */

router.post('/add-user', function(req, res) {

  bcrypt
  .hash(req.body.password, saltRounds)
  .then(hash => {
          userHash = hash 
   
  UsersModel.find().then((data)=>{
   const idInc =  data.length
    console.log(data.length)
 

  console.log(req.body);
  if (!req.body.username && !req.body.email && !req.body.password && !req.body.fullName && !req.body.birthday) {
    return res.status(400).json({ status: 400, message: "Missing required fields" });
  }

  let newUser = new UsersModel({
    userId: idInc+1,
    username: req.body.username,
    email: req.body.email,
    password: userHash,
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
  })
})
  });




/* UPDATE user listing. */


router.put('/edit-user/:id', function(req, res) {
  console.log(req.params.id);
  var value = req.body
  console.log(value);
  var userId ={userId:req.params.id}
  console.log(userId);
   UsersModel.findOneAndUpdate(userId,value)
   .then((data)=>{
     res.send({status:200,results:data})
   })
 .catch((err)=>{
     res.send(err)
   })
   console.log("user id:",userId);
  
     
 });
/* DELETE user listing.*/

router.delete('/delete-user/:id', function(req, res) {
   
   
   
  var userId ={userId:req.params.id}
  // console.log(studentId);
   UsersModel.deleteOne(userId)
   .then((data)=>{
     res.send({status:200,results:data})
   })
 .catch((err)=>{
     res.send(err)
   })
   
  
     
 });

module.exports = router;
