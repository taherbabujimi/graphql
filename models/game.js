"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {}
  Game.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        required: true,
      },
      title: {
        type: DataTypes.STRING,
        required: true,
      },
      platform: {
        type: DataTypes.JSON,
        required: true,
      },
    },
    {
      sequelize,
      modelName: "Game",
      tableName: "games",
      timestamps: true,
    }
  );
  return Game;
};
