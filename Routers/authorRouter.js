const {
  addAuthor,
  getAllAuthors,
  getOneAuthor,
} = require("../Controllers/authorController");

const authorRoute = require("express").Router();

authorRoute.post("/add", addAuthor);

authorRoute.get("/getAll", getAllAuthors);

authorRoute.get("/getOne", getOneAuthor);

module.exports = authorRoute;
