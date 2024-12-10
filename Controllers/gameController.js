const Models = require("../models/index");

const {
  validationErrorResponseData,
  successResponseData,
  errorResponseWithoutData,
  errorResponseData,
} = require("../services/responses");

module.exports.addGame = async (req, res) => {
  try {
    const game = await Models.Game.create(req.body);

    return successResponseData(res, game, 200, "Game created successfully");
  } catch (error) {
    return errorResponseData(
      res,
      "Something went wrong while adding game",
      error.message,
      400
    );
  }
};

module.exports.getAllGames = async (req, res) => {
  try {
    const games = await Models.Game.findAll();

    return games;
  } catch (error) {
    return error;
  }
};

module.exports.getOneGame = async (id) => {
  try {
    const game = await Models.Game.findOne({
      where: { id },
    });

    return game;
  } catch (error) {
    return error;
  }
};
