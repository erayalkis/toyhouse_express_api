const express = require("express");
const app = express();

const APP_PORT = 8000;

app.listen(APP_PORT, () => {
  console.log(`Listening on localhost:${APP_PORT}`);
});


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/character/:id", (req, res) => {
  // res.send(`Character with ID: ${req.params.id}`);
  res.send("boobie")
})