import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DdbbService } from '../../services/ddbb.service';
import { Tool, Url } from '../../models/tool.model';
import { DataStoreService } from '../../services/data-store.service'; 


@Component({
  selector: 'app-ddbb-button',
  templateUrl: './ddbb-button.component.html',
  styleUrls: ['./ddbb-button.component.css']
})
export class DdbbButtonComponent implements OnInit {

  tool:Tool;
  tools: Tool[];

  constructor(private ddbbService:DdbbService, private router:Router, private dataStoreService:DataStoreService) {}

  text = "Obtener datos de BASE DE DATOS" ;

  ngOnInit(): void {
  } 

    getData() {
      
      this.ddbbService.getDatosFromDDBB().subscribe(data => { 

 
          for (var i = 0; i < Object.keys(data[0]).length; i++){

            this.tool = new Tool;

            this.tool.id = data[0][i].id;
            this.tool.name = data[0][i].name;
            this.tool.png = data[0][i].png;
            this.tool.webp = data[0][i].webp;
            this.tool.tags = data[0][i].tags;      
            this.tool.oficialPage = data[0][i].oficialPage;
            this.tool.tutorialsPages = data[0][i].tutorialsPages;
            this.tool.analisisPages = data[0][i].analisisPages;

            //We store each object tool in data-store service
            this.dataStoreService.addTool(this.tool);

          }

          for (var j = 0; j<data[1].length; j++){

            this.dataStoreService.addTags(data[1][j]);
         }

        //And a provisional string for change with filters
        this.dataStoreService.setDataStoreProvisional(this.dataStoreService.getDataStore());
        
        
        //Accedemos a la ruta de visualización:
        this.router.navigate(["/favorites"]);

         
        
      });;
    
    }


}
