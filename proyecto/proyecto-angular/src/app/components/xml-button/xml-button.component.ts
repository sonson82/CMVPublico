import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { XMLService } from '../../services/xml.service';
import { Tool, Url } from '../../models/tool.model';
import { DataStoreService } from '../../services/data-store.service';


@Component({
  selector: 'app-xml-button',
  templateUrl: './xml-button.component.html',
  styleUrls: ['./xml-button.component.css']
})

export class XMLButtonComponent implements OnInit {

  tool:Tool;
  constructor(private xmlSerice:XMLService, private router:Router, private dataStoreService:DataStoreService) {}

  text = "Obtener datos de archivo XML" ;

  ngOnInit(): void {
  }

  getData = async () => {

    await this.xmlSerice.connectXML().then( toolsXML => {

        let xml = toolsXML.getElementsByTagName("tool");

        //For each tool in XML file we will crate a new object:
        for (var i = 0; i < xml.length; i++) { 

          this.tool = new Tool;

          this.tool.id = parseInt(xml[i].getElementsByTagName("id")[0].childNodes[0].nodeValue);
          this.tool.name = xml[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
          this.tool.png = xml[i].getElementsByTagName("png")[0].childNodes[0].nodeValue;
          this.tool.webp = xml[i].getElementsByTagName("webp")[0].childNodes[0].nodeValue;
          
          let xmlTags =  xml[i].getElementsByTagName("tags");
          if(xmlTags.length != 0) {
            for (var j = 0; j < xmlTags.length; j++) { 
              let tag = xmlTags[j].getElementsByTagName("name")[0].childNodes[0].nodeValue;
              this.tool.tags.push(tag);
              this.dataStoreService.addTags(tag);
            }
          }
          
          let xmlOficial =  xml[i].getElementsByTagName("oficial");
          if(xmlOficial.length != 0) {
            let urlOf:Url = {
              url: xmlOficial[0].getElementsByTagName("path")[0].childNodes[0].nodeValue,
              name: xmlOficial[0].getElementsByTagName("name")[0].childNodes[0].nodeValue
            }
            this.tool.oficialPage = urlOf;
          }

          let xmlTut =  xml[i].getElementsByTagName("tutorial");
          if(xmlTut.length != 0) {
            for (var h = 0; h < xmlTut.length; h++) { 
              let urlTut:Url = {
                url: xmlTut[h].getElementsByTagName("path")[0].childNodes[0].nodeValue,
                name: xmlTut[h].getElementsByTagName("name")[0].childNodes[0].nodeValue
              }
              this.tool.tutorialsPages.push(urlTut);
            }
          }

          let xmlAn =  xml[i].getElementsByTagName("analisis");
          if(xmlAn.length != 0) {
            for (var k = 0; k < xmlAn.length; k++) { 
              let urlAn:Url = {
                url: xmlAn[k].getElementsByTagName("path")[0].childNodes[0].nodeValue,
                name: xmlAn[k].getElementsByTagName("name")[0].childNodes[0].nodeValue
              }
              this.tool.analisisPages.push(urlAn);
            }
          }
         
          //We store each object tool in data-store service
         this.dataStoreService.addTool(this.tool);
        }
        //And a provisional string for change with filters
        this.dataStoreService.setDataStoreProvisional(this.dataStoreService.getDataStore());
        
        
        //Accedemos a la ruta de visualización:
        this.router.navigate(["/favorites"]);

    })
  }
}