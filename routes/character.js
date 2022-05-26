const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.send(`Character with ID: ${req.params.id}`);
});

router.get("/:id/details", (req, res) => {

});

router.get("/:id/gallery", (req, res) => {

});

module.exports = router;