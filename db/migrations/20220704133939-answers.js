'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Answers', {
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
          model: 'Consultants',
          key: 'id',
        },
      },
      question_Id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Questions',
          key: 'id',
        },
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      recommendations: {
        allowNull: false,
        type: Sequelize.STRING,
        get() {
          return this.getDataValue('recommendations').split(';');
        },
        set(val) {
          this.setDataValue('recommendations', val.join(';'));
        },
      },
      is_Draft: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      created_At: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updated_At: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      deleted_At: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deleted_By: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Consultants',
          key: 'id',
        },
      },
      created_By: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Consultants',
          key: 'id',
        },
      },
      updated_By: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Consultants',
          key: 'id',
        },
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Answers');
  },
};
