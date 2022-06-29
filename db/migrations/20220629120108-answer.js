'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn('answers', 'consultantId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'consultants',
        key: 'id',
      },
    });
    return queryInterface.addColumn('answers', 'isDraft', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.removeColumn('answers', 'consultantId');
    return queryInterface.removeColumn('answers', 'isDraft');
  },
};
