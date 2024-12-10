const Models = require("../models/index");

const {
  validationErrorResponseData,
  successResponseData,
  errorResponseWithoutData,
  errorResponseData,
} = require("../services/responses");

module.exports.addAuthor = async (args) => {
  try {
    const author = await Models.Author.create(args);

    return author;
  } catch (error) {
    return error;
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

module.exports.updateAuthor = async (args) => {
  try {
    let author = await Models.Author.findOne({
      where: { id: args.id },
    });

    if (!author) {
      throw new Error("Author not found.");
    }

    author.name = args.edits.name;
    author.verified = args.edits.verified;

    await author.save();

    return author;
  } catch (error) {
    return error;
  }
};

module.exports.deleteAuthor = async (args) => {
  try {
    const author = await Models.Author.findOne({
      where: { id: args.id },
    });

    if (!author) {
      throw new Error("Author not exist.");
    }

    await author.destroy();
    console.log(author);

    return author;
  } catch (error) {
    return error;
  }
};

module.exports.getAuthorReviews = async (parent) => {
  try {
    const review = await Models.Review.findAll({
      where: { author_id: parent.id },
    });

    return review;
  } catch (error) {
    return error;
  }
};
