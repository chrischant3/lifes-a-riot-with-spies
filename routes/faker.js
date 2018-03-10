//Required variables
var express = require('express');
var router = express.Router();
var faker = require('faker');
var sleep = require('sleep');
var responseWait = require('../config/responsetimes').routes.faker; 
var routestracker = require('../models/routestracker.js');

//Data to respond with
var jsonResponse = {
        "randomData": [
            {"Name": faker.name.findName()}, 
            {"Email": faker.internet.email()},
            {"Card": faker.helpers.createCard()}
        ]
}

//Logic to route
router.get('/', function(req, res, next) {
    sleep.msleep(responseWait);
    res.status(200).json(jsonResponse);
    updateCounterDatabase("faker");
});

function updateCounterDatabase(route) {
    routestracker.findOne({ "route":route }, function (err, doc) {
        if (err) {
            console.log(err);
        }
        var numRequests = doc.requests + 1;
        routestracker.update({ "route":route }, { $set: { requests: numRequests } }, { multi: true }, function (err, numReplaced) {
            if (err) {
                console.log(err);
            }
        });
    });
}

module.exports = router;