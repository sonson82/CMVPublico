import { Component, OnInit } from '@angular/core';
import { Continente } from 'src/app/clases/continente';
import { Pais } from 'src/app/clases/pais';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  title = "INICIO. Uso de pipes (JSON)";

  constructor() { }

  ngOnInit(): void {
  }

  persona1:Persona = new Persona ("Jose", "Beltran", 24, "1237684F");
  persona2:Persona = new Persona ("Anna", "Juny", 38, "76843379R");
  persona3:Persona = new Persona ("Mikel", "Goienetxea", 92, "63354879L");
  persona4:Persona = new Persona ("Marcos", "Blazquez", 14, "98465217V");

  pais1:Pais = new Pais ("comunidad", "Barcelona", [this.persona1, this.persona2, this.persona3, this.persona4]);
  pais2:Pais = new Pais ("comunidad", "Madrid", [this.persona1, this.persona2, this.persona3, this.persona4]);
  pais3:Pais = new Pais ("comunidad", "Alicante", [this.persona1, this.persona2, this.persona3, this.persona4]);

  arrayPaises:Pais[]= [this.pais1, this.pais2, this.pais3];
  
  continente:Continente = new Continente ("Europa", this.arrayPaises);

}
