"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {}
  Author.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        required: true,
      },
      name: {
        type: DataTypes.STRING,
        required: true,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        required: true,
      },
    },
    {
      sequelize,
      modelName: "Author",
      tableName: "authors",
      timestamps: true,
    }
  );
  return Author;
};
