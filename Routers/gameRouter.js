const {
  addGame,
  getAllGames,
  getOneGame,
} = require("../Controllers/gameController");

const gameRoute = require("express").Router();

gameRoute.post("/add", addGame);

gameRoute.get("/getAll", getAllGames);

gameRoute.get("/getOne", getOneGame);

module.exports = gameRoute;
