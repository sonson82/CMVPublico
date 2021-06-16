import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model'
import { PERSONAS } from '../models/personas'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  getPersonas(): Promise<Persona[]> {
    return new Promise<Persona[]>( (resolve, reject) => {
      console.log(new Date().toLocaleTimeString() + " Inicio ejecutor (Promise de PersonaService.getPersonas())");
      setTimeout(() => {
        console.log(new Date().toLocaleTimeString() + " Fin ejecutor (Promise de PersonaService.getPersonas())");
        resolve(PERSONAS);
      }, 5000);
    });
  }

}
