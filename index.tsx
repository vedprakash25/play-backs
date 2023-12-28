const express = require("express");
const app = express();
const port = 3000; // You can change this to any port you prefer

// Define a route for the home link
app.get("/", (req, res) => {
  res.send("Hello, this is the home link!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
