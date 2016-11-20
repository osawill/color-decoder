// GraphicsMagick
//var fs = require('fs')
//  , gm = require('gm');

//ImageMagick
var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});

var request = require('request');

//gm('asdf.png').identify('%k', function(err, colors) {
//    console.log('colors: ', colors);
//})

module.exports = function(url, cb) {
  var test = gm(request(url)).identify('%k', function(err, colors) {
    if(err) {
      console.error(err);
      return;
    }
//    console.log('Colors for image', url, ':', colors);
    cb(colors);
  })
}
