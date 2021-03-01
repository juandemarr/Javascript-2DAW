//Se carga el módulo HTTP
const http = require('http');

//Creación del servidor HTTP, y se define la escucha de peticiones en el puerto 8000
//request por donde le llegan las peticiones, y response por donde envia las respuestas
http.createServer((request, response) => {
    //Se define la cabecera HTTP, con el estado HTTP 200 de todo correcto, y el tipo de contenido (texto plano)
    response.writeHeader(200, {'Content-Type': 'text/plain'});
    //Contenido del mensaje
    response.end('Hello There!\n');
}).listen(8000);

//Se escribe la URL para el acceso al servidor
console.log('Servidor en la URL http://127.0.0.1:8000/');
