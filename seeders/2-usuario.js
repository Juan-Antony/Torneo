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
     await queryInterface.bulkInsert('Usuarios', [{
      nombreCompleto: 'admin',
      correo: 'admin@correo.com',
      contrasenia: 'admin',
      rolId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nombreCompleto: 'orga',
      correo: 'orga@correo.com',
      contrasenia: 'orga',
      rolId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nombreCompleto: 'lider',
      correo: 'lider@correo.com',
      contrasenia: 'lider',
      rolId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
  },
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
