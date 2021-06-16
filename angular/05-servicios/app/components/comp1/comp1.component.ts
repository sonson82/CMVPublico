import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  title = "COMPONENTE 1 : nombres"; 

  constructor (private personaService: PersonaService) {}

  ngOnInit(): void {

    this.personaService.getPersonas()
    .then(
      person => {

        for (var item of person) {
          console.log(item.nombre);
        }
    })
  }

}
