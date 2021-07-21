'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Equipos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreEquipo: {
        type: Sequelize.STRING
      },
      integrantes: {
        type: Sequelize.STRING
      },
      estadoEquipoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'EstadoEquipos',
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
    await queryInterface.dropTable('Equipos');
  }
};