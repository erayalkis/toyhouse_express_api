const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.send(`Character with ID: ${req.params.id}`);
});

router.get("/:id/details", (req, res) => {
  res.send(`Character details of character with ID: ${req.params.id}`);
});

router.get("/:id/gallery", (req, res) => {
  res.send(`Character gallery of character with ID: ${req.params.id}`);
});

module.exports = router;