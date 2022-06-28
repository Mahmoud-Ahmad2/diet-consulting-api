'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('answers', [
      {
        questionId: 1,
        title: 'Weight',
        description: 'Your weight in kilograms',
        recommendations: 'Your weight in kilograms',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 1,
        title: 'Weight',
        description: 'Your weight in grams',
        recommendations: 'Your weight in grams',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 2,
        title: 'Height',
        description: 'Your height in centimeters',
        recommendations: 'Your height in centimeters',
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
    return queryInterface.bulkDelete('answers', null, {});
  },
};
