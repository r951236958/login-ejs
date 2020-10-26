var express = require('express');
var router = express.Router();

const dotenv = require("dotenv");
require("dotenv")
    .config();

/* GET home page. */
//router.get('/', function (req, res, next) {
//    res.render('index', { title: 'Express' });
//});

router.get('/', function(req, res, next) {
    res.render('layout', { title: 'Login' });
});

module.exports = router;
