const Models = require("../models/index");

const {
  validationErrorResponseData,
  successResponseData,
  errorResponseWithoutData,
  errorResponseData,
} = require("../services/responses");

module.exports.addAuthor = async (req, res) => {
  try {
    const author = await Models.Author.create(req.body);

    return successResponseData(res, author, 200, "Author created successfully");
  } catch (error) {
    return errorResponseData(
      res,
      "Something went wrong while adding author",
      error.message,
      400
    );
  }
};

module.exports.getAllAuthors = async (req, res) => {
  try {
    const author = await Models.Author.findAll();
    return author;
  } catch (error) {
    return error;
  }
};

module.exports.getOneAuthor = async (id) => {
  try {
    const author = await Models.Author.findOne({
      where: { id },
    });

    return author;
  } catch (error) {
    return error;
  }
};
