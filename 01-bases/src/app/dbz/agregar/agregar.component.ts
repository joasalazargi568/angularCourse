import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor( private dbzServices: DbzServices){

  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(  ){
    if(this.nuevo.nombre.trim().length === 0){ 
      return; 
    }else{
      //console.log(this.nuevo);
      this.dbzServices.agregarPersonaje(this.nuevo);
      //this.onNuevoPersonaje.emit( this.nuevo);
      this.nuevo = {
        nombre: '',
        poder: 0
      }
    }
  }

}
