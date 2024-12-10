const Models = require("../models/index");

const {
  validationErrorResponseData,
  successResponseData,
  errorResponseWithoutData,
  errorResponseData,
} = require("../services/responses");

module.exports.addReview = async (req, res) => {
  try {
    const review = await Models.Review.create(req.body);

    return successResponseData(res, review, 200, "Review created successfully");
  } catch (error) {
    return errorResponseData(
      res,
      "Something went wrong while adding review",
      error.message,
      400
    );
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

    return review;
  } catch (error) {
    return error;
  }
};
