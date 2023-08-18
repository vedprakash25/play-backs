const express = require("express");
const path = require("path");

const data = require("./data/cards.json");
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "./screens")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api", (req, res) => {
  const response = data;
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
