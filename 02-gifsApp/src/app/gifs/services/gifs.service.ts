import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { SearchGifsResponse, Gif } from '../interface/Gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  private apiKey: string = 'JFKoJLhDDzfUG2Y62XZaYjzLCJCSJKaY';
  
  private servicioURL = 'https://api.giphy.com/v1/gifs';

  public resultados: Gif[] =[];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query : string){

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
                  .set('apiKey', this.apiKey)
                  .set('limit', '10')
                  .set('q', query);
    
    this.http.get<SearchGifsResponse>(`${ this.servicioURL}/search`, { params })
      .subscribe((resp: any)=>{
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));        
      })
  }
}
