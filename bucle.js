var http = require('http');
var manejador = function(solicitud,respuesta){
    var num=5
    var i=0;
    while(i<num){
        respuesta.write(i+'-->');
        i++
    }
    respuesta.end();
};
var servidor=http.createServer(manejador);
servidor.listen(8080)