var express = require('express');
var router = express.Router();

//var users = require('./users')
var findColors = require('../findColors');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/num_colors', function(req, res) {
  console.log("Fetching colors for:", req.query.src);
  findColors(req.query.src, function(total) {
    res.send(total);
  })
})

module.exports = router;
