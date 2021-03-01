//sin express
var http=require('htpp');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('prueba-ej3.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

console.log('Escuchando por localhost:8080');