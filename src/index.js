const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const port = 3001;

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));
// Template engine

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

console.log("Paht :>> ", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
