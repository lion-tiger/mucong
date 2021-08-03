'use strict'

var https = require('https')
var fs = require('fs')


var options ={
    key   : fs.readFileSync('/etc/nginx/ssl/cert_weimai.key'),
    cert  : fs.readFileSync('/etc/nginx/ssl/cert_weimai.pem'),
}


var app = https.createServer(options, function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('HTTPS:xieguoyong --------------');

}).listen(8089,'0.0.0.0');
