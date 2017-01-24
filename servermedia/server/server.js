var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(5044, function() {
  console.log('listening on port 5044.');
});
