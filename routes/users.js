var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/:id?', function(req, res, next) {

  var id = req.params.id;

  var file = path.join(__dirname, '../models/users.json');
  fs.readFile(file, 'utf8', function(err, data){
    if(err){
      next(err);
    } else {
      var obj = JSON.parse(data);
      var user = obj; // if no user is found, then return all users

      obj.forEach(function(elem){
        if(elem.id == id){
          user = elem;
        }
      });

      res.json(user);
    }
  })
});

module.exports = router;
