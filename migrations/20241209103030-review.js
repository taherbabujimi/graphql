"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("reviews", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        required: true,
      },
      rating: {
        type: Sequelize.INTEGER,
        required: true,
      },
      content: {
        type: Sequelize.STRING,
        required: true,
      },
      author_id: {
        type: Sequelize.INTEGER,
        required: true,
      },
      game_id: {
        type: Sequelize.INTEGER,
        required: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        required: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        required: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("reviews");
  },
};
