//Variables
let titulo:string;
let genero:number;
let anyo: number;
let estrenada:boolean;


type pelicula = {
    titulo:string,
    genero:number,  //1: acción, 2:infantil, 3:terror, 4:comedia, 5:drama
    anyo:number,
    estrenada:boolean,
}

function Pelicula (titulo:string, genero:number, anyo: number, estrenada:boolean){
    this.titulo = titulo;
    this.genero = genero;
    this.anyo = anyo;
    this.estrenada = estrenada;

}
let peliculas:Array<pelicula>  = [
    new Pelicula("BLACK WIDOW", 1, 2021, false),
    new Pelicula("CENICIENTA", 4, 2021, false),
    new Pelicula("CISNE NEGRO", 5, 2010, true),
    new Pelicula("BABADOOK", 3, 2014, true),
    new Pelicula("EL EXORCISTA", 3, 1973, true),
    new Pelicula("ALIEN", 3, 1979, true),
];


function filtrarTitulo(peliculas:Array<pelicula>, filtro:string): Array<pelicula> {
    return peliculas.filter (p => p.titulo == filtro)
}

    function verTitulo(){
        let resultDiv = (<HTMLInputElement>document.getElementById("results"));

        let resultado:string = "";
        titulo = (<HTMLInputElement>document.getElementById("titulo")).value.toUpperCase(); 
        let pelis:pelicula[] = filtrarTitulo(peliculas, titulo);

        if (titulo == ""){
            resultado = "No has indicado ningún título...";
        } else if (pelis.length != 0){

            for(var i = 0; i<pelis.length; i++){
                resultado = "Título: " + pelis[i].titulo + ", género: " +  generoPeliculaDesc(pelis[i].genero) + ", " + estrenoPeliculaDesc(pelis[i].estrenada) + " (año de estreno: " + pelis[i].anyo + ").";
            }
        } else {
            resultado = "No hay coincidencias."  
        }

        resultDiv.innerHTML = resultado;
    }



function verGen(peliculas: Array<pelicula>, filtro:number): Array<pelicula>{
    return peliculas.filter(p => p.genero == filtro)
  }

  function verGenero() {
    let resultDiv = (<HTMLInputElement>document.getElementById("results"));
    let resultado:string = "";

    genero = parseInt((<HTMLInputElement>document.getElementById("genero")).value); 
    let pelis:pelicula[] = verGen(peliculas,genero)

    if ((genero == null) ||(genero < 1) || (genero > 5)){
        resultado = "El género es incorrecto";

    } else if (pelis.length != 0){
        resultado += "GÉNERO: " + generoPeliculaDesc(genero) + ": <br><br>";

        for(var i = 0; i<pelis.length; i++){
            resultado += "Título: " + pelis[i].titulo + ", " + estrenoPeliculaDesc(pelis[i].estrenada) + " (año de estreno: " + pelis[i].anyo + ")." + "<br>";
        }

    } else {
        resultado = "No hay coincidencias."  
    }

    resultDiv.innerHTML = resultado;
}

function verEstr(peliculas: Array<pelicula>, filtro:boolean): Array<pelicula>{
    return peliculas.filter(p => p.estrenada == filtro)
}

  function verEstreno() {

    let resultDiv = (<HTMLInputElement>document.getElementById("results"));
    let resultado:string = "";

    let est = (<HTMLInputElement>document.getElementById("estrenada"));

    if(est.checked == true){
        resultado += "YA ESTRENADAS: <br><br>";
        estrenada = true;

    } else {
        resultado += "NO ESTRENADAS: <br><br>";
        estrenada = false;
    }

    var pelis:pelicula[] = verEstr(peliculas, estrenada);

    if(pelis.length != 0){
        for(var i=0; i<pelis.length; i++){
            resultado += "Título: " + pelis[i].titulo + ", género: " +  generoPeliculaDesc(pelis[i].genero) + ", año de estreno: " + pelis[i].anyo + "." + "<br>";
            
        }
    } 
    resultDiv.innerHTML = resultado;
}


function generoPeliculaDesc(genero:number):string{
    let generoPeli:string;

    switch (genero) {
        case 1:
            generoPeli = "ACCIÓN";
            break;
        case 2 :
            generoPeli = "INFANTIL";
            break;
        case 3 :
            generoPeli = "TERROR";
            break;
        case 4 :
            generoPeli = "COMEDIA";
            break;
        case 5 :
            generoPeli = "DRAMA";
            break;
        default:
            break;
    }

    return generoPeli;
}

function estrenoPeliculaDesc(estrenada:boolean):string{
    let estreno = estrenada == true? "YA ESTRENADA": "SIN ESTRENAR";
    return estreno;
}