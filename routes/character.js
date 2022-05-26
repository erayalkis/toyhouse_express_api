const express = require("express");
const router = express.Router();
const { fetchCharacter } = require("../services/mainScraper");

router.get("/:id", async (req, res) => {
  let character = await fetchCharacter(req.params.id);
  console.log(character);
  // res.send(`Character with ID: ${req.params.id}`);
  res.send(character);
});

router.get("/:id/details", (req, res) => {
  res.send(`Character details of character with ID: ${req.params.id}`);
});

router.get("/:id/gallery", (req, res) => {
  res.send(`Character gallery of character with ID: ${req.params.id}`);
});

module.exports = router;