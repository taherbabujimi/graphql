"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("games", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        required: true,
      },
      title: {
        type: Sequelize.STRING,
        required: true,
      },
      platform: {
        type: Sequelize.JSON,
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
    await queryInterface.dropTable("games");
  },
};
