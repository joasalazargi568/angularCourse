import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18Select 
  nombre: string = 'Vanessa';
  genero: string = 'Femenino';

  invitacioMap = {
    'Masculino': 'invitarlo',
    'Femenino' : 'invitarla'
  }

  //i18Plural
  clientes: string[] = ['Vanessa','Johnatan', 'Olga','Toby'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){
    this.nombre= 'Johnatan';
    this.genero= 'Masculino';
  }

  borrarPersona(){
    this.clientes.pop();
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Johnatan',
    edad: '30',
    lugar: 'Colombia'
  }

  //Json Pipe
  heroes = [
    {
      nombre:'Superman',
      vuela: 'true'
    },
    { 
      nombre: 'Batman',
      vuela: 'false'
    }, 
    {
      nombre:'Aquaman',
      vuela: 'false'
    }
  ];

  //Async Pipe
  miObservable = interval(2000); //0,1,2,3

  valorPromesa = new Promise( (resolve, reject)=>{
    setTimeout( () =>{
      resolve('Tenemos data de promesa');
    }, 3500)
  } );
}
