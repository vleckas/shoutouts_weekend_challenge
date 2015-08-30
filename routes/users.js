module.exports = router;


var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var file = path.join(__dirname, '../models/users.json');
    fs.readFile(file, function(err, data){
        res.send(JSON.parse(data));
    })
});

module.exports = router;