import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque2',
  templateUrl: './bloque2.component.html',
  styleUrls: ['./bloque2.component.css']
})
export class Bloque2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Bloque 2';
  titleA = 'FOR (ngFor)';
  titleB = 'SWITCH (ngSwitch)';

  public persons = [
    {name:"uno", age:10},
    {name:"dos", age:20},
    {name:"tres", age:30},
    {name:"cuatro", age:40}
  ];

  opcion:string = "";

}
