let authRoutes = require('./auth')

module.exports = function(app) {
  authRoutes(app);
};
