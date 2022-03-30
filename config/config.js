require('dotenv').config();

module.exports = {
    development: {
        username: 'dev',
        password: process.env.SEQUELIZE_PASSWORD,
        database: 'nodebird',
        host: '127.0.0.1',
        dialect: 'mysql',
      },
      test: {
        username: "dev",
        password: process.env.SEQUELIZE_PASSWORD,
        database: "nodebird_test",
        host: "127.0.0.1",
        dialect: "mysql"
      },
      production: {
        username: 'dev',
        password: process.env.SEQUELIZE_PASSWORD,
        database: 'nodebird',
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: false,
      },
};