import Sequelize from 'sequelize';


const User = (sequelize) => {
  sequelize.define('Users', {
    name: {
      type: Sequelize.STRING,
      field: 'name',
      allowNull: false,
      validate: {
        len: {
          args: [0, 15],
          msg: 'Too many simbols at field "Name"',
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      unique: {
        args: true,
        msg: 'This email already taken. Please try to login.',
        fields: [sequelize.fn('lower', sequelize.col('email'))],
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'The email you entered is invalid or is already in our system.',
        },
        max: {
          args: 254,
          msg: 'The email you entered is invalid or longer than 254 characters.',
        },
      },
    },
    password: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
  }, {
    freezeTableName: true,
  });
};

export default User;
