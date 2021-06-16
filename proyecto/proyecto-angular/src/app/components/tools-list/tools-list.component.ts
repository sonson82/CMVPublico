import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStoreService } from '../../services/data-store.service';
import { Tool } from '../../models/tool.model';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.css']
})
export class ToolsListComponent implements OnInit {

  tools: Tool[];
  subscription: Subscription;

  constructor(private dataStoreService:DataStoreService) { }

  ngOnInit(): void {
    //Para más información ver data-store.service.ts
    this.subscription = this.dataStoreService.getDataStoreProvisional().subscribe (data => { this.tools = data;});
  }


  ngOnDestroy() {
    this.subscription.unsubscribe(); 
  }


  flipCard(event:any) {

    let item:HTMLDivElement = event.currentTarget;

    if(item!= undefined){
      if ((!item.classList.contains('backView')) ){
        item.classList.add('backView');
      } else{
        item.classList.remove('backView');
      }
    }
  }
}
