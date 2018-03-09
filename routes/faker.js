//Required variables
var express = require('express');
var router = express.Router();
var faker = require('faker');
var sleep = require('sleep');
var responseWait = require('../config/responsetimes').routes.faker;

//Time to sleep


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
});

module.exports = router;