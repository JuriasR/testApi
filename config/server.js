module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
});

// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   admin: {
//     auth: {
//       secret: env('ADMIN_JWT_SECRET', '0c9a39235aac48184e81cafaf58676b1'),
//     },
//   },
// });
