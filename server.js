var express = require('express');
var http = require('http');
var bodyParser = require("body-parser");
var app = express();

http = http.createServer(app);
app.set("ipaddr", "127.0.0.1");
app.set("port", "7071");

app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send("Server is up and running")
});

http.listen(app.get("port"), app.get("ipaddr"), function(){
	console.log("Server is up and running:::::::::");
});