const express = require("express");
const { exec } = require("child_process");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/port", (req, res) => {
  res.send(`port ${port}`);
});

app.get("/test", (req, res) => {
  res.send("test");
});

app.get("/exec", (req, res) => {
  exec(`wget -qO - ${req.body.url}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      res.send(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.send(stdout);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
