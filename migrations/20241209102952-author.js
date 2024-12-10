"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("authors", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        required: true,
      },
      name: {
        type: Sequelize.STRING,
        required: true,
      },
      verified: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("authors");
  },
};
