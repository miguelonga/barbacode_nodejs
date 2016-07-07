var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
  console.log(res)
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});