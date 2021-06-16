
/* En primer lugar creamos una variable que será la que guarde todos los mensajes enviados */
var lista = new Array();
/* Función que nos cargará una vista con un formulario y le pasará la lista de todos los mensajes enviados:  */
function enviarForm(req, res){
   res.render('enviar_mensaje', {
      lista: lista
   });
}

exports.get_enviarForm = function(req, res){
   enviar_mensaje(req, res);
}

/* Así recibimos las variables de tipo POST */
exports.post_enviarForm = function(req, res){
   var asunto = req.body.asunto;
   var mensaje = req.body.mensaje;
   lista.push({
      asunto: asunto,
      mensaje: mensaje
   })
   enviarForm(req, res);
}
