const express = require('express');
const { exec } = require('child_process');
var router = express.Router();

router.post('/generate-component', (req, res) => {
  const command = req.body.command;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      res.status(500).send(error.message);
    } else {
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      res.send(stdout);
    }
  });
});

module.exports = router;
