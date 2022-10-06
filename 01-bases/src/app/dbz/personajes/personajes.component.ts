import { Component } from '@angular/core';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

  //@Input() personajes: Personaje[] = [];

  get personajes(){
    return this.dbzServices.personajes;
  }

  constructor( private dbzServices: DbzServices){}
}
