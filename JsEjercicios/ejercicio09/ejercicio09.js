let tools = [];
let divData;
let divImg;

let getToolsfromXML = () => {

	$("#ocultar").hide();

	divData = document.getElementById("salidaXML");
	divImg = document.getElementById("salidaIMG");

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
 }
 
 function showData(){

	if (tools.length != 0){


		let list = "<ul id='toolsList'>";
    
		for (i = 0; i < tools.length; i++) { 

			list += "<li onclick='showImg(" + i + ")'>" + tools[i][0] + "</li>";
		}
		list += "</ul>"
	
		divData.innerHTML = list;

		$("#ocultar").show();
		$("#mostrar").hide();

	} else {

		divData.innerHTML = "No hay datos disponibles.";
	}
  }


  function showImg(arrayPosition){

		let img = "<img src='"+  tools[arrayPosition][1] +"' alt='Imagen de " +  tools[arrayPosition][0] + "'>";

		divImg.innerHTML = img;
  }


  function hideData(){
	$("#ocultar").hide();
	$("#mostrar").show();

	divData.innerHTML = "";
	divImg.innerHTML = "";

  }