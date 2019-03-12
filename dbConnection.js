import Sequelize from 'sequelize';
import path from 'path';

import config from './config';

const ORM = () => {
  const sequelize = new Sequelize(config.database, config.user, config.secret, {
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
      underscored: false,
      freezeTableName: false,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci',
      },
      timestamps: true,
    },
  });
  sequelize.import(path.resolve(__dirname, '../backendtiju/models/UserModel'));
  return sequelize;
};

export default ORM();
