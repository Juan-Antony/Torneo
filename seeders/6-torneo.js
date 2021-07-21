'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Torneos', [{
      nombreTorneo: 'Torneo1',
      descripcion: 'descripcion',
      fechaInicio: new Date(),
      fechafin: new Date(),
      numEquipos: 6,
      numMaxEquipos: 10,
      equipoId: 1,
      estadoTorneoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nombreTorneo: 'Torneo2',
      descripcion: 'descripcion',
      fechaInicio: new Date(),
      fechafin: new Date(),
      numEquipos: 5,
      numMaxEquipos: 10,
      equipoId: 2,
      estadoTorneoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nombreTorneo: 'Torneo3',
      descripcion: 'descripcion',
      fechaInicio: new Date(),
      fechafin: new Date(),
      numEquipos: 10,
      numMaxEquipos: 10,
      equipoId: 3,
      estadoTorneoId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nombreTorneo: 'Torneo4',
      descripcion: 'descripcion',
      fechaInicio: new Date(),
      fechafin: new Date(),
      numEquipos: 8,
      numMaxEquipos: 10,
      equipoId: 2,
      estadoTorneoId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
  }
], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
