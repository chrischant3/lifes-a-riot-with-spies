var Datastore = require('nedb'),

routestracker = new Datastore({
    filename: __dirname + '/../db/routestracker.db',
    autoload: true,
    timestampData: true
  });

module.exports = routestracker;