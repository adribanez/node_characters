const express = require("express");

const characterRouter = express.Router();

const {
  create,
  getAll,
  getOneById,
  getOneByName,
  updateOne,
  deleteOne,
} = require("./character.controller");

characterRouter.post("/", create);
characterRouter.get("", getAll);
characterRouter.get("/:id", getOneById);
characterRouter.get("/name/:name", getOneByName);
characterRouter.patch("/:id", updateOne);
characterRouter.delete("/:id", deleteOne);

module.exports = characterRouter;
