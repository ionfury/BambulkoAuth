let authRoutes = require('./auth')

module.exports = function(app) {
  compressionRoutes(app);
  authRoutes(app);
};
