import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataStoreService } from '../../services/data-store.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tool } from '../../models/tool.model';


let allTools:Tool[];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  isFilter:Boolean;
  form:FormGroup;
  public isCollapsed:boolean = true;
  collapseText:string;
  submitText:string;

  constructor(private modalService: NgbModal, private fctrl:FormBuilder, private dataStoreService:DataStoreService) {

  this.collapseText = 'Leer más...';
  this.submitText = 'BUSCAR';

  this.form=fctrl.group({ 
 
      search:['',Validators.compose([
        Validators.required,
     
      ])],
    })
  }


  ngOnInit(): void { 
    allTools = this.dataStoreService.getDataStore();
    
  }

  changeText(){
    this.collapseText = (this.isCollapsed) ? 'Leer más...' : 'Cerrar';
  }


  onSubmit() {
  
    let search:string =  this.form.controls['search'].value;
    this.form.controls['search'].setValue("");

    let toolsSearched: Tool[] = [];


    for(var h=0; h < allTools.length; h++){
      let name:string = allTools[h].name;
      console.log('name: ' +name)
      console.log('search: ' +search)

      if (name.includes(search.toUpperCase())){
        toolsSearched.push(allTools[h]);
      }
    }
    
    this.dataStoreService.setDataStoreProvisional(toolsSearched);
    console.log ('toolsSearched: ' + toolsSearched)

  }

  //It opens the modal
  open(content) {
    this.modalService.open(content, {backdropClass: 'light-green-backdrop'});
  }

  
  


}
