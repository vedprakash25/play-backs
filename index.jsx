const express = require("express");
// const path = require("path");
const cors = require("cors"); // Import the cors middleware

const data = require("./data/blogsData.json");
const app = express();
const port = 8000;

app.use(cors());
// app.use(express.static(path.join(__dirname, "./screens")));

app.get("/", (req, res) => {
  res.send("homepage text");
});

app.get("/api", (req, res) => {
  const response = data;
  res.send(response);
});

app.get("/api/blogs/:id", (req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = data.find((blog) => blog.id === blogId);

  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: "Blog not found" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
