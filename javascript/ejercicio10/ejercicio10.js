let sH = screen.availHeight;
let sW = screen.availWidth;

let tools = [];
let divData;

//Get data from XML file
let getToolsfromXML = () => {

	divData = document.getElementById("salidaXML");

	// lee desde GitHub.
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		getData(this);
	  }
	};
	xhr.open("GET", "data.xml", true);
	xhr.send();
}


//Put this data into an array of objects
function getData (xml) {
	tools = [];
    let i;
	let toolId;
    let toolName;
    let toolImg;
	let tool = [];
    let xmlDoc = xml.responseXML;
    let x = xmlDoc.getElementsByTagName("tool");
    

    for (i = 0; i <x.length; i++) { 

		toolId = x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
		toolName = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
		toolPng = x[i].getElementsByTagName("png")[0].childNodes[0].nodeValue;
		toolWebp = x[i].getElementsByTagName("webp")[0].childNodes[0].nodeValue;

		tool = [toolId, toolName, toolPng, toolWebp];
		tools.push(tool);
    }

	showData();
 }
 

 function showData(){

	if (tools.length != 0){


		let img = `<div id="toolsList">`;
    
		for (i = 0; i < tools.length; i++) { 

			img += `<div class="imgDiv" id="img${tools[i][0]} onclick="transformImg()">
						<div class="imgPicture transitionDiv">
						<picture>
							<source srcSet="${tools[i][2]}" type="image/png"/>
							<source srcSet="${tools[i][3]}" type="image/webp"/>
							<img class="img-fluid" src="${tools[i][2]}" alt="Imagen del logotipo de ${tools[i][1]}">
						</picture>
						</div>
						<div class="imgText transitionDiv">
							<p>${tools[i][1]}</p>
						</div>
					</div>`
		}

		img += `</div>`;

		divData.innerHTML = img;

	} else {

		divData.innerHTML = `<div id='toolsList'> 
								<p>NO HAY FAVORITOS CON ESTOS CRITERIOS. 
								</p>
							</div>`;  //podriem eliminar filtres
	}
  }


 


  


  function transformImg(id){

  }