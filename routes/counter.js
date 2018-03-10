var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var routestracker = require('../models/routestracker.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function(req, res, next) {
    routestracker.find({}, function(err, routes) {
        if (err) {
          res.send(err);
          return;
        }
        res.status(200).json(routes);
      });     
});

router.post('/', function(req, res, next) {
    routestracker.insert(req.body, function(err, newRoute) {
        if (err) {
          res.send(err);
          return;
        }
        res.status(201).end();
      });
});

module.exports = router;