/*
MIDDLEWARE:  es una forma de filtrar una solicitud y una respuesta en una aplicación. Añade una pequeña capa
  entre el cliente y la aplicación ( a través de una función). Nos ayuda a generar un código más sencillo de mantener.
  Ejemplos de Middleware:
  * Limpiar las etiquetas HTML añadiendo sangrias y volviendo a dar formato al contenido
  * Notificaciones de errores y excepciones
  * Código que monitoriza el rendimiento de la aplicación
*/

// 1- SE NECESITA el módulo "connect" para hacer un Middleware --> INstalarlo !!!
var connect = require('connect'),
  http = require('http');
/*
  Arrancamos a través de connect
*/

var app = connect()
  .use(hoursOn)
  .use(daysOn)
  .use(monthOn)
  .use(helloWorld)
// Se pueden lanzar mas de un Middleware, los que sean

// CONTROL de ACCESO con un Middleware : solución muy segura, eliminamos el control de acceso del propio código en
 // en si ( la lógica ) y lo ponemos en el Middleware, ANTES de iniciar la lógica de la aplicación ( osea el código en si)
  // Función MIDDLEWARE; SIEMPRE debe de tener la sintaxis con "next"
function hoursOn(req, res, next) {
    var currentHour = new Date().getHours();
    console.log(currentHour);
  if (currentHour < 10 || currentHour > 18) {
    res.writeHead(503, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('NO TIENES ACCESO. Puedes volver entre las 10:00 am y las 06:00 pm');
  } else {
    next();
  }
}

function daysOn(req, res, next) {
    var currentDay = new Date().getDate();
    console.log(currentDay);
  if (currentDay < 12 || currentDay > 22) {
    res.writeHead(503, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('NO TIENES ACCESO. Puedes volver entre los días 12 y 22 de cada mes');
  } else {
    next();
  }
}

function monthOn(req, res, next) {
    var currentMonth = new Date().getMonth();
    console.log(currentMonth);
  if (currentMonth <  05 || currentMonth > 07) {
    res.writeHead(503, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('NO TIENES ACCESO. Puedes volver entre los meses Junio, Julio y Agosto');
  } else {
    next();
  }
}

function helloWorld(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hi! We are open!');
  console.log("ESTÁS DENTRO !!");
}

http.Server(app).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');

