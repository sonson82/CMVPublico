import { Injectable } from '@angular/core';

import { PedidosEmp } from '../models/pedidosEmp.model'
import { PEDIDOS } from '../models/pedidos'

@Injectable({
  providedIn: 'root'
})
export class FechaService {

  constructor() { }

  getFecha(): Promise<PedidosEmp[]> {
    return new Promise<PedidosEmp[]>( (resolve, reject) => {
      console.log(new Date().toLocaleTimeString() + " Inicio ejecutor (Promise de FechaService.getFecha())");
      setTimeout(() => {
        console.log(new Date().toLocaleTimeString() + " Fin ejecutor (Promise de FechaService.getFecha())");
        resolve(PEDIDOS);
      }, 5000);
    });
  }

}
