var http = require('http');
var manejador=function(solicitud,respuesta){
    console.log('Conexion Entrante');
    respuesta.end('Hola Mundo!');
};
var servidor = http.createServer(manejador);
servidor.listen(8080);