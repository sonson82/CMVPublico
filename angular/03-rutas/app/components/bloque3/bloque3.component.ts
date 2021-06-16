import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque3',
  templateUrl: './bloque3.component.html',
  styleUrls: ['./bloque3.component.css']
})
export class Bloque3Component implements OnInit {


  title = 'Bloque 3';
  titleA   = 'Model - ngModel';
  nombre  = '';
  nombre2 = '';
  cambiaNombre() {
    this.nombre=this.nombre.toLowerCase();
    this.nombre2=this.nombre.toUpperCase();
  }
  cambiaNombre2() {
    this.nombre2=this.nombre2.toUpperCase();
    this.nombre=this.nombre2.toLowerCase();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
