const express = require("express");
const app = express();
const character = require("../routes/character");

const APP_PORT = 8000;

app.listen(APP_PORT, () => {
  console.log(`Listening on localhost:${APP_PORT}`);
});


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/character", character);