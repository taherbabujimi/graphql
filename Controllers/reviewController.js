const Models = require("../models/index");

const {
  validationErrorResponseData,
  successResponseData,
  errorResponseWithoutData,
  errorResponseData,
} = require("../services/responses");

module.exports.addReview = async (args) => {
  try {
    const review = await Models.Review.create(args);

    return review;
  } catch (error) {
    return error;
  }
};

module.exports.getAllReviews = async () => {
  try {
    const reviews = await Models.Review.findAll();

    return reviews;
  } catch (error) {
    return error;
  }
};

module.exports.getOneReview = async (id) => {
  try {
    const review = await Models.Review.findOne({
      where: { id },
    });

    if (!review) {
      throw new Error("Review not found.");
    }

    return review;
  } catch (error) {
    return error;
  }
};

module.exports.deleteReview = async (args) => {
  try {
    const review = await Models.Review.findOne({
      where: { id: args.id },
    });

    if (!review) {
      throw new Error("Review not found.");
    }

    return review;
  } catch (error) {
    return error;
  }
};

module.exports.updateReview = async (args) => {
  try {
    let review = await Models.Review.findOne({
      where: { id: args.id },
    });

    if (!review) {
      throw new Error("Review not found.");
    }

    review.rating = args.edits.rating;
    review.content = args.edits.content;
    review.author_id = args.edits.author_id;
    review.game_id = args.edits.game_id;

    await review.save();

    return review;
  } catch (error) {
    return error;
  }
};

module.exports.getReviewAuthor = async (parent) => {
  try {
    let author = await Models.Author.findOne({
      where: { id: parent.author_id },
    });

    return author;
  } catch (error) {
    return error;
  }
};

module.exports.getReviewGame = async (parent) => {
  try {
    let game = await Models.Game.findOne({
      where: { id: parent.game_id },
    });

    return game;
  } catch (error) {
    return error;
  }
};
