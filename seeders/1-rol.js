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
     await queryInterface.bulkInsert('Rols', [{
      nombreRol: 'Administrador',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nombreRol: 'Organizador',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nombreRol: 'Participante Lider',
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
