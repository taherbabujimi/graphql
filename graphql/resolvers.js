const {
  addGame,
  getAllGames,
  getOneGame,
  deleteGame,
  updateGame,
  getGameReviews,
} = require("../Controllers/gameController");

const {
  getAllAuthors,
  getOneAuthor,
  addAuthor,
  deleteAuthor,
  updateAuthor,
  getAuthorReviews,
} = require("../Controllers/authorController");

const {
  getAllReviews,
  getOneReview,
  addReview,
  deleteReview,
  updateReview,
  getReviewAuthor,
  getReviewGame,
} = require("../Controllers/reviewController");

const resolvers = {
  Query: {
    games() {
      return getAllGames();
    },
    game(_, args) {
      return getOneGame(args.id);
    },
    authors() {
      return getAllAuthors();
    },
    author(_, args) {
      return getOneAuthor(args.id);
    },
    reviews() {
      return getAllReviews();
    },
    review(_, args) {
      return getOneReview(args.id);
    },
  },

  Game: {
    reviews(parent) {
      return getGameReviews(parent);
    },
  },

  Author: {
    reviews(parent) {
      return getAuthorReviews(parent);
    },
  },

  Review: {
    author(parent) {
      return getReviewAuthor(parent);
    },

    game(parent) {
      return getReviewGame(parent);
    },
  },

  Mutation: {
    addGame(_, args) {
      return addGame(args.game);
    },

    deleteGame(_, args) {
      return deleteGame(args.id);
    },

    updateGame(_, args) {
      console.log(args);
      return updateGame(args);
    },

    addAuthor(_, args) {
      return addAuthor(args.author);
    },

    deleteAuthor(_, args) {
      return deleteAuthor(args);
    },

    updateAuthor(_, args) {
      return updateAuthor(args);
    },

    addReview(_, args) {
      return addReview(args.review);
    },

    deleteReview(_, args) {
      return deleteReview(args);
    },

    updateReview(_, args) {
      return updateReview(args);
    },
  },
};

module.exports = resolvers;
