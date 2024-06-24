const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/youtube", (req, res) => {
  res.send(`<h1>Youtube</h1>`);
});

app.get("/get", (req, res) => {
  //   res.download("./files/card.pdf");
  //   res.location("http://example.com");
  res.redirect("http://example.com");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is up at ${process.env.PORT}`);
});
