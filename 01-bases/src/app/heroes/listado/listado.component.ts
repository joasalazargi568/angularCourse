import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Ironman','Hulk', 'Thor', 'Batman'];
    heroesBorrado: string[] = [];
    

    borrarHeroe(){
      this.heroes.pop();
    }

}
