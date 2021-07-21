'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreCompleto: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      contrasenia: {
        type: Sequelize.STRING
      },
      rolId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Rols',
          key: 'id'
        }
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  }
};