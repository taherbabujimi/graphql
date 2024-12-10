const { getAllGames, getOneGame } = require("../Controllers/gameController");

const {
  getAllAuthors,
  getOneAuthor,
} = require("../Controllers/authorController");

const {
  getAllReviews,
  getOneReview,
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
};

module.exports = resolvers;
