import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Dato } from '../dato';
import { ConsulSer1Service } from '../consul-ser1.service';

@Component({
  selector: 'app-consulta1',
  templateUrl: './consulta1.component.html',
  styleUrls: ['./consulta1.component.css']
})
export class Consulta1Component implements OnInit {

  datos: Dato[] = [];

  constructor(private ConsulSer1Ser: ConsulSer1Service ) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }
  
  obtenerDatos() {
    return this.ConsulSer1Ser.getDatos();
  }

}
