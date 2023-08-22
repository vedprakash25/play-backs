const express = require("express");
const path = require("path");
const cors = require("cors"); // Import the cors middleware

const data = require("./data/blogsData.json");
const app = express();
const port = 8080;

app.use(cors());
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
