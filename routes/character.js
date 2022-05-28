const express = require("express");
const router = express.Router();
const getAuths = require("../models/helpers/getAuths");
const Character = require("../models/Character");

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

async function getAuths(req, res, next) {
  getAuths()
}

module.exports = router;