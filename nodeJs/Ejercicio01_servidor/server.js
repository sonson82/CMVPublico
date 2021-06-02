//CREACIÓN SERVIDOR WEB

//Recogemos módulos necesarios:
var http = require('http'),
    url = require('url');
var fs = require('fs');


// Creación del servidor 
http.createServer(function(req, res) {

  //Recoger (crear) la url del servidor
  var pathname = url.parse(req.url).pathname;

  // Si la url (ruta) existe, devolvemos la respuesta en función de la solicitud:
  if (pathname === '/') {

      // Se añade una cabecera con información; tipo de contenido, fecha, etc ,,,
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

      // Renderizamos la vista en HTML mediante el módulo fs:
      fs.readFile('./index.html', (err, data) => {
        if(err) {
          console.log(err);
          res.end()
        } else {
          res.write(data);
          res.end();
        }
      })      


  } else if (req.url === '/style.css') {
      fs.readFile('style.css', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(data);
        res.end();
  });
  

  } else if (pathname === '/deportes') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
  });

  fs.readFile('./deportes.html', (err, data) => {
      if (err) {
          console.log(err);
          res.end()
      } else {
          res.write(data);
          res.end();
      }
  })


  } else if (pathname === '/contacto') {
      // Respuesta con texto plano
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
      });
      res.end('Ejercicio 01 de Nodejs: \n Creación de un servidor por Sònia Pujol.')
     
     
  } else if (pathname === '/servicios') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
  });

  fs.readFile('./servicios.html', (err, data) => {
      if (err) {
          console.log(err);
          res.end()
      } else {
          res.write(data);
          res.end();
      }
  })    


  } else if (pathname === '/blog') {
     res.writeHead(200, {
         'Content-Type': 'text/html',
     });
 
     fs.readFile('./blog.html', (err, data) => {
         if (err) {
             console.log(err);
             res.end()
         } else {
             res.write(data);
             res.end();
         }
     })


  } else if (pathname === '/redirect') {
      // En este caso, redireccionaremos a una url concreta (300):
      res.writeHead(301, {
        //Podemos redirigir internamente o externamente.
        //'Location': '/'
        'Location': 'https://sonson82.github.io/CMVPublico/'
      });
      res.end();

  } else if (pathname === '/historia') {
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
        
      });

      res.end('La historia de la Programación está relacionada directamente con la aparición de los computadores, \n' +
              'que ya desde el siglo XV tuvo sus inicios con la construcción de una máquina que realizaba operaciones \n' + 
              'básicas y raíces cuadradas (Gottfried Wilheml von Leibniz); aunque en realidad la primera gran influencia \n' +
              'hacia la creación de los computadores fue la  máquina diferencial para el cálculo de polinomios, proyecto \n'+ 
              'no concluido de Charles Babbage (1793-1871)  con el apoyo de Lady Ada Countess of Lovelace (1815-1852), \n'+ 
              'primera persona que incursionó en la programación y de quien proviene el nombre del lenguaje de programación \n'+
              'ADA creado por el DoD (Departamento de defensa de Estados Unidos) en la década de 1970. ')

//En caso de no existir la url (ruta) indicada, devolvemos error 404
} else {
   res.writeHead(404, {
   'Content-Type': 'text/plain'
 });
 res.end('Page not found')
}

//Indicamos la IP y el puerto de escucha (normalmente 3000 o 4000)
//IP y puerto SERVIDOR
}).listen(4000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:4000/');


//Para levantar el servidor desde consola: node server.js

