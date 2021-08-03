'use strict'

var http = require('http')
var https = require('https')
var fs = require('fs')


var express = require('express')
var serveIndex = require('serve-index')

var options ={
    key   : fs.readFileSync('/etc/nginx/ssl/cert_weimai.key'),
    cert  : fs.readFileSync('/etc/nginx/ssl/cert_weimai.pem'),
}

var app = express();
app.use(serveIndex('./public'));
app.use(express.static('./public'));

var http_server=http.createServer(app);
http_server.listen(8080, '0.0.0.0');

var https_server=https.createServer(options, app); //!!!!!!!!!!!!!!https not http
https_server.listen(8089, '0.0.0.0');






