'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('answer', [
      {
        questionId: 1,
        title: 'Weight',
        description: 'Your weight in pounds',
        recommendations: 'Your weight in pounds',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 2,
        title: 'Height',
        description: 'Your height in inches',
        recommendations: 'Your height in inches',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.bulkDelete('answer', null, {});
  },
};
