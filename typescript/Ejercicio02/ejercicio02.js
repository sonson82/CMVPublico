//Variables
var titulo;
var genero;
var anyo;
var estrenada;
function Pelicula(titulo, genero, anyo, estrenada) {
    this.titulo = titulo;
    this.genero = genero;
    this.anyo = anyo;
    this.estrenada = estrenada;
}
var peliculas = [
    new Pelicula("BLACK WIDOW", 1, 2021, false),
    new Pelicula("CENICIENTA", 4, 2021, false),
    new Pelicula("CISNE NEGRO", 5, 2010, true),
    new Pelicula("BABADOOK", 3, 2014, true),
    new Pelicula("EL EXORCISTA", 3, 1973, true),
    new Pelicula("ALIEN", 3, 1979, true),
];
function filtrarTitulo(peliculas, filtro) {
    return peliculas.filter(function (p) { return p.titulo == filtro; });
}
function verTitulo() {
    var resultDiv = document.getElementById("results");
    var resultado = "";
    titulo = document.getElementById("titulo").value.toUpperCase();
    var pelis = filtrarTitulo(peliculas, titulo);
    if (titulo == "") {
        resultado = "No has indicado ningún título...";
    }
    else if (pelis.length != 0) {
        for (var i = 0; i < pelis.length; i++) {
            resultado = "Título: " + pelis[i].titulo + ", género: " + generoPeliculaDesc(pelis[i].genero) + ", " + estrenoPeliculaDesc(pelis[i].estrenada) + " (año de estreno: " + pelis[i].anyo + ").";
        }
    }
    else {
        resultado = "No hay coincidencias.";
    }
    resultDiv.innerHTML = resultado;
}
function verGen(peliculas, filtro) {
    return peliculas.filter(function (p) { return p.genero == filtro; });
}
function verGenero() {
    var resultDiv = document.getElementById("results");
    var resultado = "";
    genero = parseInt(document.getElementById("genero").value);
    var pelis = verGen(peliculas, genero);
    if ((genero == null) || (genero < 1) || (genero > 5)) {
        resultado = "El género es incorrecto";
    }
    else if (pelis.length != 0) {
        resultado += "GÉNERO: " + generoPeliculaDesc(genero) + ": <br><br>";
        for (var i = 0; i < pelis.length; i++) {
            resultado += "Título: " + pelis[i].titulo + ", " + estrenoPeliculaDesc(pelis[i].estrenada) + " (año de estreno: " + pelis[i].anyo + ")." + "<br>";
        }
    }
    else {
        resultado = "No hay coincidencias.";
    }
    resultDiv.innerHTML = resultado;
}
function verEstr(peliculas, filtro) {
    return peliculas.filter(function (p) { return p.estrenada == filtro; });
}
function verEstreno() {
    var resultDiv = document.getElementById("results");
    var resultado = "";
    var est = document.getElementById("estrenada");
    if (est.checked == true) {
        resultado += "YA ESTRENADAS: <br><br>";
        estrenada = true;
    }
    else {
        resultado += "NO ESTRENADAS: <br><br>";
        estrenada = false;
    }
    var pelis = verEstr(peliculas, estrenada);
    if (pelis.length != 0) {
        for (var i = 0; i < pelis.length; i++) {
            resultado += "Título: " + pelis[i].titulo + ", género: " + generoPeliculaDesc(pelis[i].genero) + ", año de estreno: " + pelis[i].anyo + "." + "<br>";
        }
    }
    resultDiv.innerHTML = resultado;
}
function generoPeliculaDesc(genero) {
    var generoPeli;
    switch (genero) {
        case 1:
            generoPeli = "ACCIÓN";
            break;
        case 2:
            generoPeli = "INFANTIL";
            break;
        case 3:
            generoPeli = "TERROR";
            break;
        case 4:
            generoPeli = "COMEDIA";
            break;
        case 5:
            generoPeli = "DRAMA";
            break;
        default:
            break;
    }
    return generoPeli;
}
function estrenoPeliculaDesc(estrenada) {
    var estreno = estrenada == true ? "YA ESTRENADA" : "SIN ESTRENAR";
    return estreno;
}
