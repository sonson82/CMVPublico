import { Injectable } from '@angular/core';
import { environment } from  '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsulSer1Service {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDatos() {
   
	  //return this.http.get(`${this.url}/getAll.php`);
    
    return this.http.get('http://localhost/ServeR/getAll.php').subscribe(respuesta => {
      console.log(respuesta);
    });
	
  }


}
