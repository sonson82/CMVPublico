import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  title = "INICIO. Uso de pipes";

  constructor() { }

  ngOnInit(): void {
  }

  value!: string;
  change(value: string) {
    this.value = value;
  }

}
