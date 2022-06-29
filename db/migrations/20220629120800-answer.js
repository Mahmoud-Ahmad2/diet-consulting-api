'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    // delete all rows from table answers
    queryInterface.bulkDelete('answers', null, {});
    return queryInterface.bulkInsert('answers', [
      {
        questionId: 1,
        title: 'Weight',
        description: 'Your weight in pounds',
        recommendations: 'Your weight in pounds',
        consultantId: 2,
        isDraft: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 1,
        title: 'Weight',
        description: 'Your weight in kilograms',
        recommendations: 'Your weight in kilograms',
        consultantId: 1,
        isDraft: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 1,
        title: 'Weight',
        description: 'Your weight in grams',
        recommendations: 'Your weight in grams',
        consultantId: 3,
        isDraft: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 2,
        title: 'Height',
        consultantId: 2,
        isDraft: true,
        description: 'Your height in centimeters',
        recommendations: 'Your height in centimeters',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 2,
        title: 'Height',
        description: 'Your height in inches',
        recommendations: 'Your height in inches',
        consultantId: 1,
        isDraft: false,
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
