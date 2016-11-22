var express = require('express');
var router = express.Router();
var mcache = require('memory-cache');

var cache = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}

//var users = require('./users')
var findColors = require('../findColors');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/num_colors', cache(1800), function(req, res) {
  console.log("Fetching colors for:", req.query.src);
  findColors(req.query.src, function(total) {
    res.send(total);
  })
})

module.exports = router;
