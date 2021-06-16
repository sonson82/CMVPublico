import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Tool } from '../models/tool.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private tools: Tool[] = [];
  private tags: string[] = [];

  //FUNCTIONS FOR ALL TOOLS ARRAY
  addTool(tool:Tool) {
    this.tools.push(tool);
  }

  getDataStore():Tool[] {
    return this.tools;
  }

  resetDataStore(){
    this.tools = [];
    this.setDataStoreProvisional(this.tools);
  }

  //FUNCTIONS FOR TAGS
  addTags(tag:string){
    if(!this.tags.includes(tag)){
        this.tags.push(tag);
    }
  }
  
  getTags():string[]{
     return this.tags;
  }

  /*RxJs Subjects*/

  //Creamos un SUBJECT con poder de recordar el dato anterior:BehaviorSubject y que
  //nos permite definir un valor por defecto, que sería el equivalente al initial state de Redux:
  // BehaviorSubject  
  private toolsProvisional = new BehaviorSubject(this.tools);

  setDataStoreProvisional(arraytools:Tool[]){
      //Le pasamos al SUBJECT (que ejerce aquí de OBSERVER)  
      this.toolsProvisional.next( arraytools );
  }

  getDataStoreProvisional(): Observable<Tool[]> {
    //Retornamos el valor mediante el SUBJECT (que ejerce aquí de OBSERVABLE) 
    return this.toolsProvisional.asObservable();
  }

  /* 1  Los componentes que quieran modificar el contenido, 
   *    sólo tienen que llamar al servicio desde el consrtructor, 
   *    para así poder llamar a la función setDataStoreProvisional(Tool[])
   *
   * 2  Los componentes que necesiten recojer el valor de la variable 
   *    cuando esta se modifique, deberán:
   * 
   *    - Declarar una SUBSCRIPCIÓN:   
   *        subscription: Subscription;
   * 
   * 
   *    - Llamar al servicio desde el construtcor
   *        constructor(private dataStoreService:DataStoreService) {}
   *        
   * 
   *    - Pasar la variable OBSERVABLE a la SUBSCRIPCION desde ngOnInit:
   *        ngOnInit(): void {
   *          this.subscription = this.dataStoreService.getDataStoreProvisional().subscribe
   *             ( data => { console.log(data) });
   *        }
   *        Dónde data es el valor de la variable.
   * 
   *    - Y, finalmente, cancelar la subscripción desde ngOnDestroy:
   *        ngOnDestroy() { this.subscription.unsubscribe(); }
   * 
   * 
   *   // https://pablomagaz.com/blog/rxjs-subjects-que-son-como-funcionan 
   */

}
