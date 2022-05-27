const express = require("express");
const router = express.Router();
const Character = require("../services/Character");

router.get("/:id", createCharObj, async (req, res) => {
  const { character } = req;

  res.json(character);
});

router.get("/:id/details", createCharObj, (req, res) => {
  const { character } = req;

  res.json(character);
});

router.get("/:id/gallery", createCharObj, (req, res) => {
  const { character } = req;

  res.json(character);
});

async function createCharObj(req, res, next) {
  let character = new Character(req.params.id, req.path);
  req.character = await character.data();
  next();
}

module.exports = router;