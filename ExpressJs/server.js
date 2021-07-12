//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res){
res.send("<h1>hello, world!</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact at me: jivendrakumar979@gmail.com");
})

app.get("/about", function(req, res){
    res.send("I am Jivendra Kumar.");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Coffee</li><li>Code</li><li>Music</li></ul>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
})
