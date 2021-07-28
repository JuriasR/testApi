const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'mysql',
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'sys'),
//         username: env('DATABASE_USERNAME', 'xuryaz'),
//         password: env('DATABASE_PASSWORD', 's3gUr0$'),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//       options: {}
//     },
//   },
// });
