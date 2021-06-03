let tools = [];

let getToolsfromXML = () => {

	// lee desde GitHub.
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		getData(this);
	  }
	};
	xhr.open("GET", "orla.xml", true);
	xhr.send();

}


function getData (xml) {
	tools = [];
    let i;
    let toolName;
    let toolImg;
	let tool = [];
    let xmlDoc = xml.responseXML;
    let x = xmlDoc.getElementsByTagName("tool");
    

    for (i = 0; i <x.length; i++) { 
     
		toolName = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
		toolImg = x[i].getElementsByTagName("img")[0].childNodes[0].nodeValue;

		tool = [toolName,toolImg];
		tools.push(tool);

    }

 	showData();

 }


 
 function showData(){

	let div = document.getElementById("salidaXML");

	if (tools.length != 0){


		let list = "<ul id='toolsList'>";
    
		for (i = 0; i < tools.length; i++) { 

			list += "<li><a onclick='showImg(" + i + ")'>" + tools[i][0] + "</a></li>";
		}
		list += "</ul>"
	
		div.innerHTML = list;

	} else {

		div.innerHTML = "No hay datos disponibles.";
	}
  }


  function showImg(arrayPosition){

	let div = document.getElementById("salidaIMG");

		let img = "<img src='"+  tools[arrayPosition][1] +"' alt='Imagen de " +  tools[arrayPosition][0] + "'>";

		div.innerHTML = img;
  }


  ``
/*------------------------------------------*/


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
		crearAccederDatos(this,"Desde local");
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

