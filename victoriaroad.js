var allimaavenue = require( 'allimaavenue' );
var dunnstreet = require( 'dunnstreet' );

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/map', function(req, res) {
  res.render('views/mapping.ejs');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 5000;

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

