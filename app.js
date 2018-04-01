var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BlogApp');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

var blogSchema = new mongoose.Schema({
    title : String,
    image : String,
    body : String,
    created : { type : Date , Default : Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

Blog.create({
    title : "First Post" ,
    image : "http://eskipaper.com/images/image-2.jpg",
    body : "Ajjshd dshfoijldans asijd nak aaaaaaaaaaaaa adddddddddd fcjjjjjjjd ffffffffffjds isejfcjbcjsdxz",
});