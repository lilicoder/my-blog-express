var express = require('express');
var router = express.Router();
var mysql = require('./../config/mysql')

/* GET home page. */
router.get('/:id', function (req, res, next) {
    var logstr = JSON.stringify({ url: req.path });
    mysql.connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });
    res.end(logstr);
});

module.exports = router;
