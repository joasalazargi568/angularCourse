import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRouted: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRouted.params
    .pipe(
      switchMap( (param) => this.paisService.getPaisPorCodigo(param['id'])),
      tap(console.log)
    )
    .subscribe( pais => {
      console.log(pais);
    })
    /*this.activatedRouted.params
    .subscribe(({id}) =>{
      this.paisService.getPaisPorCodigo(id)
      .subscribe(pais =>{
        console.log(pais);
      })
    })*/
  }

}
