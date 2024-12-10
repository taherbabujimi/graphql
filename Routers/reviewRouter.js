const {
  addReview,
  getAllReviews,
  getOneReview,
} = require("../Controllers/reviewController");

const reviewRoute = require("express").Router();

reviewRoute.post("/add", addReview);

reviewRoute.get("/getAll", getAllReviews);

reviewRoute.get("/getOne", getOneReview);

module.exports = reviewRoute;
