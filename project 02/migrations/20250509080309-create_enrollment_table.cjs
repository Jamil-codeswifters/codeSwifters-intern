'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enrollments', {
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Students', key: 'id' },
        onDelete: 'CASCADE', onUpdate: 'CASCADE'
      },
      courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Courses', key: 'id' },
        onDelete: 'CASCADE', onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Composite PK
    await queryInterface.addConstraint('Enrollments', {
      fields: ['studentId', 'courseId'],
      type: 'primary key',
      name: 'PK_Enrollments'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enrollments');
  }
};
