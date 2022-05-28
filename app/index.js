const express = require("express");
const app = express();
const character = require("../routes/character");
const getAuths = require("../models/helpers/getAuths");
const logger = require("pino")();

const APP_PORT = 8000;


app.listen(APP_PORT, () => {
  logger.info(`Listening on http://localhost:${APP_PORT}/`);
});


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/auths_test", (req, res) => {
  getAuths();
  res.send("hi");
})

app.use("/character", character);