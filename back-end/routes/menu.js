var express = require('express');
const MenuModule = require('../models/menu.model');
var router = express.Router();


/* GET menu listing. */
router.get('/get-menu', function (req, res, next) {

  MenuModule.find().then((data) => {
    res.send({ status: 200, results: data })
  }).catch((err) => {
    res.send(err)
  })
});
module.exports = router;
