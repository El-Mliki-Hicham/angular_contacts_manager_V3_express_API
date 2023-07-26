const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.post('/api/generate-component', (req, res) => {
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

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
