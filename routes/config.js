//Required variables
var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var responseConfigs = './config/responsetimes.json';

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

//Logic to route
router.post('/', function(req, res, next) {
    fs.writeFile(responseConfigs, JSON.stringify(req.body), function (error) {
        if (error) {
            throw error;
        }
    });
    res.status(200).end();
});

module.exports = router;