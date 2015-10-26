var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({target: 'http://91.12.80.10'});

http.createServer(function(req, res) {
  var body = '';
  req.on('data', function(data){
    body += data;
    console.log(data);
  });
  req.on('end', function(){
    console.log(body);
  });
  proxy.web(req, res);
}).listen(80);