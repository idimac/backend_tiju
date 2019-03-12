/* eslint-disable */

module.exports = {
    up: (queryInterface, Sequelize) => {
      try {
        queryInterface.createTable('Users', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
          },
          name: Sequelize.STRING,
          email: {
            type: Sequelize.STRING,
            unique: true,
          },
          password: Sequelize.STRING,
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE,
        }, {
          charset: 'utf8',
        }),
        queryInterface.bulkInsert('Users', [{
          name: 'Admin',
          email: 'liaysh1991@gmail.com',
          password: '12345',
        }])
      } catch (err) {
        console.log(err);
      }
    },
  
  
    down: (queryInterface, Sequelize) => {
      queryInterface.dropTable('Users');
    },
  };
  