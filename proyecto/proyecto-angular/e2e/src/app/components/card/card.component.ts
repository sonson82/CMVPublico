import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tool } from 'src/app/models/tool.model';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  isBack:boolean = false;
  subscription: Subscription;
  fontSize:boolean;

  constructor(private dataStoreService:DataStoreService) {}

  @Input() tool:Tool;
   
  ngOnInit(): void {
    this.subscription = this.dataStoreService.getFontSize().subscribe (res => { this.fontSize = res;});
  }


flipCard(){
  this.isBack = !this.isBack;
}

}
