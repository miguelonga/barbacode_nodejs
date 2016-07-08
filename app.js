var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var Person = require('./model/person.js');
var Post = require('./model/post.js');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/test');

app.use('/public', express.static('public'));
app.use(bodyparser.urlencoded({ extended: false }));
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/blog', function (req, res) {
  Post.find({}, function (err, posts) {
    res.render('blog', { posts: posts });
  });
});

app.get('/blog/:id', function (req, res) {
  Post.findOne({ _id: req.params.id }, function (err, post) {
    media = post.media.split(',');
    console.log(media);
    res.render('post', { post: post, media: media });
  });
});

app.post('/blog', function (req, res) {
  var post = new Post(req.body);
  post.save( function(err, data) {
    Post.find({}, function(err, posts){
      res.render('blog', { posts:posts })
    });
    // res.redirect('/contact')
  });
});

app.post('/contact', function (req, res) {
  var contact = new Person(req.body);
  contact.save( function(err, data) {
    console.log(err, req.body, data);
    Person.find({}, function(err, all){
      res.send(all)
    });
    // res.redirect('/contact')
  });
});

app.get('/:name', function (req, res){
  res.render(req.params.name);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});