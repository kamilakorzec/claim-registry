const authRoutes = require('./auth-routes');
const claimRoutes = require('./claims-routes');

module.exports = function(app, db) {
    authRoutes(app, db);
    claimRoutes(app, db);
    // Other route groups could go here, in the future
};