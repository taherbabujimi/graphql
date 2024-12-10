const IndexRoute = require("express").Router();
const authorRoute = require("../Routers/authorRouter");
const gameRoute = require("../Routers/gameRouter");
const reviewRoute = require("../Routers/reviewRouter");

IndexRoute.use("/v1/authors", authorRoute);
IndexRoute.use("/v1/games", gameRoute);
IndexRoute.use("/v1/reviews", reviewRoute);

module.exports = IndexRoute;
