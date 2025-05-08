'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,   
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fName:     { type: Sequelize.STRING, allowNull: true },
      lName:     { type: Sequelize.STRING, allowNull: true },
      age:       { type: Sequelize.INTEGER, allowNull: true },
      gender:    { type: Sequelize.ENUM('male','female','other'), allowNull: true },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
    // If using Postgres, drop the enum type:
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_Users_gender";'
    );
  }
};
