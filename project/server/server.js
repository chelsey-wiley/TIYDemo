var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static('public'));


var database = [{
    id: 1,
    name: 'Jobs',
    items: ['Sign-language interpreter', 'Professional complainer', 'shoe salesperson']
  },
  {
    id: 2,
    name: 'Certifications',
    items: ['Expert complainer', 'Arch-enemy of back-end development']
  }
];


app.get('/api/categories', function(req, res) {
  res.send(database);
});

app.post('/api/category', function(req, res) {
  database.push({
    id: database.length + 1,
    name: req.body.name,
    items: []
  });

  console.log('our database has', database);

  res.send('you rock');
});

app.post('/api/category/:id', function(req, res) {

  var index = Number(req.params.id);
  var category = database[index - 1];
  category.items.push(req.body.name);


  res.send('You posted');
});




app.listen(7230, function() {
  console.log('listening on port 7230');
});
