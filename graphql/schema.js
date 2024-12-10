module.exports = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        author_id: Int!
        game_id: Int!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!,
        verified: Boolean!
        reviews: [Review!]
    }

    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation{
        addGame(game: AddGameInput): Game
        deleteGame(id: ID!): Game
        updateGame(id: ID!, edits: UpdateGameInput!): Game

        addAuthor(author: AddAuthorInput): Author
        deleteAuthor(id: ID!): Author
        updateAuthor(id: ID!, edits: UpdateAuthorInput!): Author

        addReview(review: AddReviewInput): Review
        deleteReview(id: ID!): Review
        updateReview(id: ID!, edits: UpdateReviewInput!): Review
    }

    input AddGameInput{
        title: String!
        platform: [String!]!
    }

    input UpdateGameInput{
        title: String,
        platform: [String!]
    }

    input AddAuthorInput{
        name: String!,
        verified: Boolean!
    }

    input UpdateAuthorInput{
        name: String,
        verified: Boolean
    }

    input AddReviewInput{
        rating: Int!,
        content: String!,
        author_id: Int!,
        game_id: Int!
    }

    input UpdateReviewInput{
        rating: Int,
        content: String,
        author_id: Int,
        game_id: Int
    }
`;
