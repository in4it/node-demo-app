var express = require('express');
var app = express();

// App Get comment to get Request with Hello World as the res
app.get('/', function (req, res) {
  res.send('!Hello World!');
});

// Server list config e.g. port and address
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  // Print the data for user review
  console.log('Example app listening on port %s', port);
});
