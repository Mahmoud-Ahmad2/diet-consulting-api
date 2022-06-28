'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('questions', [
      {
        question: 'What is your age?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'What is your favorite color?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'What is your favorite food?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'What is the best weight you have ever lifted?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'What is the best sport for diet?',
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
    return queryInterface.bulkDelete('questions', null, {});
  },
};
