var http = require("http");
http.createServer(function(req, res){
res.write("Protezione"); 
res.end();
}).listen(8080);