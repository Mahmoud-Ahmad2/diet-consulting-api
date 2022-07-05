'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Votes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      consultant_Id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'consultants',
          key: 'id',
        },
      },
      answer_Id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'answers',
          key: 'id',
        },
      },
      vote: {
        allowNull: false,
        type: Sequelize.ENUM('up', 'down'),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
    return await queryInterface.addConstraint('Votes', {
      type: 'unique',
      name: 'unique_vote',
      fields: ['consultant_Id', 'answer_Id', 'vote'],
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Votes');
  },
};
