import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tool } from '../../models/tool.model';

type TagType = {
  id:number;
  name:string;
  iSelected:boolean;
}

let allTools:Tool[];


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FiltersComponent implements OnInit {
  
  tags:TagType[];
  isFilter:Boolean;
  submitText:string = "VER TODO";

  constructor(private modalService: NgbModal, private dataStoreService:DataStoreService) {}
 

  ngOnInit(): void {

    this.tags = [];
    allTools = this.dataStoreService.getDataStore();
    let arrayTag:string[] = this.dataStoreService.getTags();

    for(var i=0; i<arrayTag.length; i++){

      var id:number = i+1;
      var name:string = arrayTag[i];
      var iSelected:boolean = false;

      let tagType:TagType = { id, name, iSelected}

      this.tags.push(tagType);
    }
  }
  
  //Onchecked changes
  changeState (id:number){
    const item = this.tags.find(x => x.id === id);
    item.iSelected = !item.iSelected;   

    this.changeSubmitText();
  }

  changeSubmitText(){
    var i:number= 0;
    this.isFilter = false;
    while ((!this.isFilter) && (i < this.tags.length)){
      if( this.tags[i].iSelected === true){
        this.isFilter = true;
      }
      i++;
    }

    this.submitText = (this.isFilter) ? "APLICAR FILTROS" : "VER TODO";
  }

  //It opens the modal
  open(content) {
    this.modalService.open(content, {backdropClass: 'light-green-backdrop'});
  }

  //Clans filters in modal
  cleanFilters(){
    for(var i=0; i<this.tags.length; i++){
      this.tags[i].iSelected = false;
    }
    this.submitText = "VER TODO";
  }
  
  //Submit modal filters
  submit(){
    let selectedTags:string[] = [];    

    //Set tags selected into an array
    for(var i=0; i < this.tags.length; i++){
      if( this.tags[i].iSelected === true){
          selectedTags.push(this.tags[i].name);
      }
    }

    // If there are filters selected on submit
    if(selectedTags.length != 0){
      //We will choose tools with selected tags.
      this.getToolsTagged(selectedTags);
    } else {
      this.dataStoreService.setDataStoreProvisional(allTools);
    }

  }


  getToolsTagged(selectedTags:string[]){
    let toolsTaged: Tool[] = [];

    //If is only one tag selected:
    if(selectedTags.length == 1) {
        //We will look for wich tools has this tag
        for(var j=0; j < allTools.length; j++){
          //If tool has we will put it into a provisional array
          if(allTools[j].tags.includes(selectedTags[0])){
            toolsTaged.push(allTools[j]);
          }
        }

    } else { // if there are more than 1 tag selected

      //We will look for wich tools has these tags (all of them)
      for(var h=0; h < allTools.length; h++){

        let tooltagged:boolean = true;
        let k:number = 0;

        while ((tooltagged == true) && (k < selectedTags.length)){

          if(!allTools[h].tags.includes(selectedTags[k])){
              tooltagged = false;
          }
          k ++;
        }

        if(tooltagged) {toolsTaged.push(allTools[h]);}
      }
    }

    //We store the list in service
    this.dataStoreService.setDataStoreProvisional(toolsTaged);
  }
}
