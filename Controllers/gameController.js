const Models = require("../models/index");

const {
  validationErrorResponseData,
  successResponseData,
  errorResponseWithoutData,
  errorResponseData,
} = require("../services/responses");

module.exports.addGame = async (args) => {
  try {
    const game = await Models.Game.create(args);

    return game;
  } catch (error) {
    return error;
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

module.exports.deleteGame = async (id) => {
  try {
    let game = await Models.Game.findOne({
      where: { id },
    });

    if (!game) {
      throw new Error("Game not found.");
    }

    await game.destroy();
    console.log(game);

    return game;
  } catch (error) {
    return error;
  }
};

module.exports.updateGame = async (args) => {
  try {
    let game = await Models.Game.findOne({
      where: { id: args.id },
    });

    if (!game) {
      throw new Error("Game not found.");
    }

    game.title = args.edits.title;
    game.platform = args.edits.platform;

    await game.save();

    return game;
  } catch (error) {
    return error;
  }
};

module.exports.getGameReviews = async (parent) => {
  try {
    let review = await Models.Review.findAll({
      where: { game_id: parent.id },
    });

    return review;
  } catch (error) {
    return error;
  }
};
