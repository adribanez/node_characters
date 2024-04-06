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

const { isAuth } = require("../middleware/auth.middleware");

characterRouter.post("/", [isAuth], create);
characterRouter.get("", getAll);
characterRouter.get("/:id", getOneById);
characterRouter.get("/name/:name", getOneByName);
characterRouter.patch("/:id", [isAuth], updateOne);
characterRouter.delete("/:id", [isAuth], deleteOne);

module.exports = characterRouter;
