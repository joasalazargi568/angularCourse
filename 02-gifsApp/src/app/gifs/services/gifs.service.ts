import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { SearchGifsResponse, Gif } from '../interface/Gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  private apiKey: string = 'JFKoJLhDDzfUG2Y62XZaYjzLCJCSJKaY';

  //TODO: Cambiar tipo por su tipo correspondiente.
  public resultados: Gif[] =[];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    /*if (localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!)
    }*/

  }

  buscarGifs(query : string){

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?apiKey=JFKoJLhDDzfUG2Y62XZaYjzLCJCSJKaY&q=${ query }&limit=10`)
      .subscribe((resp: any)=>{
        console.log(resp.data);
        this.resultados = resp.data;
        
      })
  }
}
