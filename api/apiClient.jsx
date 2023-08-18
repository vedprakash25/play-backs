const helloWorld = app.get("/", (req, res) => {
  res.send("Hello World! port 80");
});

export { helloWorld };
