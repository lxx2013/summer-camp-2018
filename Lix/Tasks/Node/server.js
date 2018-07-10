var http = require('http')
var color = require('colors')
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('<input type="search">');
}).listen(8888);

console.log(`Server running at http://localhost:8888/`.green)