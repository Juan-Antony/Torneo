'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Torneos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreTorneo: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      fechaInicio: {
        type: Sequelize.DATE
      },
      fechafin: {
        type: Sequelize.DATE
      },
      numEquipos: {
        type: Sequelize.INTEGER
      },
      numMaxEquipos: {
        type: Sequelize.INTEGER
      },
      equipoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Equipos',
          key: 'id'
        }
      },
      estadoTorneoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'EstadoTorneos',
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
    await queryInterface.dropTable('Torneos');
  }
};