var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use('/public', express.static('public'));

app.listen(process.env.port || 3000, function () {
  console.log('Example app listening on port 3000!');
});