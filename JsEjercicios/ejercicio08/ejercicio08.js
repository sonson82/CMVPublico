/* Ejercicios basicos */

function suma (num01=0, num02=0){
    let suma, mensaje;
    suma = num01 + num02;
    mensaje = num01 +" + "+ num02 +" = "+ suma;
    return mensaje;
}

/* ------------------------------------------------- */

function sumaCuadrados (num01=0, num02=0){
        let sc, mensaje;
        sc =  (num01*num01) +  (num02*num02);
        mensaje = num01 +  " al cuadrado  + " + num02 + " al cuadrado  = " + sc;
        return mensaje;
}

/* ------------------------------------------------- */

let sumaFlecha =  (num01=0, num02=0) => num01 +" + "+ num02 +" = "+ (num01 + num02);

/* ------------------------------------------------- */

let sumaEntradaTeclado = () => {

    let  dato, mensaje;
    let numbers = [];
    numbers.length = 2;

    alert (`Necesitaremos que ingreses 2 numeros del 1 al 10`);

    for  (let i = 0; i < numbers.length; i++ ){
       num = 0;

       do{
        dato = window.prompt("Introduce el segundo número:" , "0");
        num = parseInt(dato);
        
        if(isNaN(num)){
            alert (`¡No has introducido un número!`);
            num = 0;
            
        } else if((num>10) || (num<1)){
            alert (`¡Número incorrecto!`);
        }
        
        } while ((num>10) || (num<1))

        numbers[i] = num;
    }

    mensaje = numbers[0] +" + "+ numbers[1] +" = "+ (numbers[0] + numbers[1]);

    return mensaje; 
}

/* ------------------------------------------------- */
/* ------------------------------------------------- */
/* Ejercicio día  */

//Ejemplo de Carlos:   https://carlosboniniklison.github.io/publico/ejercicios/xml/27-abr-xml.html
let registrados = [];
let fuente = "";
let fuenteYorden = "";

let lecturaXMLdesdeGitHub = () => {

        // lee desde GitHub.
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            crearAccederDatos(this, "Desde GitHub");
          }
        };
        xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados.xml", true);
        xhr.send();

}

function lecturaXMLdesdeLocal (){
	// lee desde aquí.
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		crearAccederDatos(this,"Desde aquí");
	}
	};
	xhr.open("GET", "usuarios.xml", true);
	xhr.send();
}

function crearAccederDatos(xml, desde) {
	fuente = desde;
	fuenteYorden = fuente + " orden inicial";
	registrados = [];
    let i;
    let usrNom;
    let usrPsw;
	var usuario = [];
    let xmlDoc = xml.responseXML;
    let x = xmlDoc.getElementsByTagName("usuario");
    

    for (i = 0; i <x.length; i++) { 
     
      usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
      usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;

	 	usuario = [usrNom,usrPsw];
		registrados.push(usuario);

    }

 	mostrarTabla();

 }


  function mostrarTabla(){

	let div = document.getElementById("salidaTabla");

	if (registrados.length != 0){

		let tabla= fuenteYorden + "<br/>" + "<br/>";
    
		tabla += "<table style='width:300px; text-align:center; border:1px solid #000;'><tr><th style='width:50%;'>Empleado</th><th style='width:50%;'>Clave</th></tr>";
		for (i = 0; i < registrados.length; i++) { 
		 
		  
		  tabla += "<tr><td  style='width:50%;'>" + registrados[i][0] + "</td><td  style='width:50%;'>" + registrados[i][1] + "</td></tr>";
		}
		tabla += "</table>"
	
		div.innerHTML = tabla;

	} else {

		div.innerHTML = "No hay datos disponibles. Indica de que archivo XML quieres extraerlos.";
	}
	 

	

  }

  function ordenarNombreUsuario(){

	fuenteYorden = fuente + " ordenados por nombre de usuario";
	registrados.sort(
		(usuario1,usuario2) =>
		   usuario1[0].localeCompare(usuario2[0]),
	  );

	  mostrarTabla();

  }

  function ordenarClaveUsuario(){

	fuenteYorden = fuente + " ordenados por clave de usuario";
	registrados.reverse(
		(usuario2,usuario1) =>
		   usuario1[1].localeCompare(usuario2[1]),
	  );

	  mostrarTabla();

  }


/* ------------------------------------------------- */

  //Ejemplo de Carlos: https://carlosboniniklison.github.io/publico/ejercicios/xml/loginXML.html
 
  let usrIntentando = "";
  let claveIntentando = "";

  function controlar(){	
	// determinamos en qué estado se carga la página:
	// 1 - usuario con sesion iniciada
	// 2 - usuario intentando ingresar
	// 3 - sin usuario 
	let divSaldiaForm = document.getElementById("salidaForm");
	let message = null;

	if (sessionStorage.getItem("usuarioLogueado")) { // 1 - usuario con sesion iniciada
		$("#formulario").hide();
		//$("#limpiar").hide();
		$("#desconectar").show();	

		message = "Hola " + sessionStorage.getItem("usuarioLogueado");

	} else { // Si no existe un usuario con sesion iniciada
		$("#formulario").show();
		//$("#limpiar").show();
		$("#desconectar").hide();

		if (sessionStorage.getItem("usuarioIntentando")) { // 2 - usuario intentando ingresar
			conectarXML();
			
		} else { // 3 - sin usuario 

			if(sessionStorage.getItem("isValidated")){ //Si ha habido intento de validación
				message = "Lo sentimos, usuario y contraseña incorrectos...";
				sessionStorage.removeItem("isValidated");
			} else { //Sin intento de validación
				message = "Indica usuario y contraseña... ";
			}
		}		
	}

	divSaldiaForm.innerHTML = message;
}


  function intentar(){
	// Guardamos datos intento de validación
	// Al recargar la página, los tendremos en la memoria del navegador.
	  
	let divSaldiaForm = document.getElementById("salidaForm");

	if (typeof(Storage) !== "undefined") {

		sessionStorage.setItem("usuarioIntentando", document.forms["miFormulario"]["formUsuario"].value);
		sessionStorage.setItem("claveIntentando", document.forms["miFormulario"]["formClave"].value);

	} else {
		divSaldiaForm.innerHTML = "Este navegador no soporta web storage...";
	}
}

function conectarXML() {
	//Conectamos con el archivo XML (desde github)
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			validarUsrPsw(this);
		}
	};
	xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados.xml", true);
	xhr.send();
}

function validarUsrPsw(xml) {
	//Validaremos los datos guardados en la memoria (temporales: introducidos por el usuario en el formulario)
	//contrastando con los datos XML

	usuarioIntentando=sessionStorage.getItem("usuarioIntentando");
	claveIntentando=sessionStorage.getItem("claveIntentando");

	var i = 0;
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("usuario");
	let isValidated = false;
	
	while ((isValidated == false) && ( i < x.length)){

		if ((x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == usuarioIntentando) && (x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == claveIntentando)) {	
			isValidated = true;
		  } 

		i++;
	}

	//Las siguientes variables se leeran al refrescar la página en la función controlar().
	if(isValidated){ 
		// En caso de ser correctos (user and pass),
		// almacenamos el usuario en la variable usuarioLogueado de la memoria.
		sessionStorage.setItem("usuarioLogueado",usuarioIntentando);
	} else { 
		// En caso erroneo, 
		// eliminamos la variable usuarioLogueado de la memoria.
		sessionStorage.removeItem("usuarioLogueado");
	}

	sessionStorage.setItem("isValidated", isValidated);

	//Eliminamos las variables temporales (intento de login)
	sessionStorage.removeItem("usuarioIntentando");
	sessionStorage.removeItem("claveIntentando");
	// Llamamos a la función principal controladora del estado de variables. En vez de forzar la recarga la página
	controlar();
}

function desconectar(){
	//Limpiamos campos de formulario
	document.forms["miFormulario"]["formUsuario"].value == "";
	document.forms["miFormulario"]["formClave"].value == "";
	// Eliminamos todas las variables de la memoria del navegador.
	sessionStorage.removeItem("usuarioLogueado");
	sessionStorage.removeItem("isValidated");
	sessionStorage.removeItem("usuarioIntentando");
	sessionStorage.removeItem("claveIntentando");
	// Forzamos la recarga de la página
	window.location.reload();
}

 