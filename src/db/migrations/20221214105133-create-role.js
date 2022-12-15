'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
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

    await queryInterface.bulkInsert('roles', [
      { name: 'ROLE_ADMIN', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ROLE_MANAGER', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ROLE_EMPLOYEE', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ROLE_STAKEHOLDER', createdAt: new Date(), updatedAt: new Date() },
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('roles');
  }
};