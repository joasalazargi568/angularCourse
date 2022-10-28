import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';


// Fuente de consumo https://restcountries.com/
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v3.1/';

  private apiURLRegion: string = 'https://restcountries.com/v2/';

  get httpParams (){
    return new HttpParams()
      .set('fields','name,flags,capital,altSpellings,population,translations,area');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string) : Observable<Country[]>{
    const url = `${ this.apiURL }/name/${ termino }`;
    return this.http.get<Country[]>(url, { params : this.httpParams });
  }

  buscarCapital(termino: string) : Observable<Country[]>{
    const url = `${ this.apiURL }/capital/${ termino }`;
    return this.http.get<Country[]>(url, { params : this.httpParams });
  }

  getPaisPorCodigo(id: string) : Observable<Country>{
    const url = `${ this.apiURL }/alpha/${ id }`;
    return this.http.get<Country>(url);
  }

  getPaisPorRegion(region: string): Observable<Country[]>{
    const url = `${ this.apiURLRegion }/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, { params : this.httpParams } )
      .pipe(
        tap(console.log)
      );
  }
}
