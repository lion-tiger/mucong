'use strict'

var http = require('http')

var app = http.createServer(function(req,res){
    res.writeHead(200, {'Contentj-Type':'text/plain'});
    res.end("xieguoyong 20210803");	

}
).listen(8080, '0.0.0.0');


