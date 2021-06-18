import { Injectable } from '@angular/core';
import { environment } from  '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { DataStoreService } from './data-store.service';


@Injectable({
  providedIn: 'root'
})
export class DdbbService {

  url = environment.baseUrl;
  constructor(private http: HttpClient, private dataStoreService:DataStoreService) { }

  getDatosFromDDBB() {
    return this.http.get(this.url)
  }

}
