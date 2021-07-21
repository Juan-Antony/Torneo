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
     await queryInterface.bulkInsert('Equipos', [{
      nombreEquipo: 'Equipo1',
      integrantes: 'Integrantes1',
      estadoEquipoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nombreEquipo: 'Equipo2',
      integrantes: 'Integrantes2',
      estadoEquipoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    nombreEquipo: 'Equipo3',
    integrantes: 'Integrantes3',
    estadoEquipoId: 2,
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
