import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque1',
  templateUrl: './bloque1.component.html',
  styleUrls: ['./bloque1.component.css']
})
export class Bloque1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Bloque 1';
  titleA = 'IF (ngIf)';

  grupo1=false;
  grupo2=false;
  subgrupo11=false;
  subgrupo12=false;
  subgrupo21=false;
  subgrupo22=false;
}
