const express = require("express");
const app = express();
const character = require("../routes/character");
const logger = require("pino")();

const APP_PORT = 8000;

app.listen(APP_PORT, () => {
  logger.info(`Listening on http://localhost:${APP_PORT}/`);
});


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/character", character);