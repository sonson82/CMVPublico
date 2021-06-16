var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'App express. INICIO' });
});

//Pagina1
router.get('/pagina1', function (req, res, next) {
  res.render('pagina1',  { title: 'Página 1' });
});

//Form
router.get('/enviarForm', function(req, res, next) {
res.render('paginaForm',  { title: 'Formulario' });
});
router.post('/enviarForm', function(req, res, next) {
// Capturo datos del formulario
var asun = req.body.asunto;
var mensa = req.body.mensaje;
// Los mando a la vista
res.render("resultadosForm", { asunto: asun, mensaje: mensa, title: 'Resultados formulario' });
});


module.exports = router;
