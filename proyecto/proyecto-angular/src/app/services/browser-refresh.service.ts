import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class BrowserRefreshService {

  browserRefresh:boolean = false;

     public constructor() {
           this.browserRefresh = true;
     }

     getBrowserRefresh():boolean{
      return this.browserRefresh;
    }
}