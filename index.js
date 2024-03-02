require('dotenv').config()
const express = require("express");
const app = express();

const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/login", (req, res) => {
    res.send("<h1>Login Please</h1>")
});

app.listen(process.env.PORT, () => {
  console.log(`Example port ${port}`);
});
