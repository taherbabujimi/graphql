"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      this.belongsTo(models.Game, { foreignKey: { field: "game_id" } });
    }
  }
  Review.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        required: true,
      },
      rating: {
        type: DataTypes.INTEGER,
        required: true,
      },
      content: {
        type: DataTypes.STRING,
        required: true,
      },
      author_id: {
        type: DataTypes.INTEGER,
        required: true,
        references: {
          model: "authors",
          key: "id",
        },
      },
      game_id: {
        type: DataTypes.INTEGER,
        required: true,
        references: {
          model: "games",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Review",
      tableName: "reviews",
      timestamps: true,
    }
  );
  return Review;
};
