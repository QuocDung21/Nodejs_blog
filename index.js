const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send("Hello World !");
});
app.get("/home", (req, res) => {
  res.send("Hello Home !");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
