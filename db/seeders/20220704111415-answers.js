'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker');

const answer = [...Array(20)].map(() => ({
  consultant_Id: faker.datatype.number({ min: 1, max: 5 }),
  question_Id: faker.datatype.number({ min: 1, max: 20 }),
  title: faker.lorem.sentence(),
  description: faker.lorem.sentence(),
  recommendations: [...Array(5)].map(() => faker.lorem.word()).join(';'),
  is_Draft: true,
  created_At: new Date(),
  updated_At: new Date(),
  deleted_At: null,
  deleted_By: null,
  created_By: faker.datatype.number({ min: 1, max: 5 }),
  updated_By: faker.datatype.number({ min: 1, max: 5 }),
}));
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', answer, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers', null, {});
  },
};
