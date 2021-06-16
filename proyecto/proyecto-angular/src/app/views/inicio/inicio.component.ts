import { Component, OnInit } from '@angular/core';

import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private dataStoreService:DataStoreService) { }

  ngOnInit(): void {
    //We will restart data from service
    this.dataStoreService.resetDataStore();
  }

}
