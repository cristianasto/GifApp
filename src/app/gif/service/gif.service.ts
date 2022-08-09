import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APISearch, GifApi } from '../interfaces/ApiSearch';
  
export interface Gif {
  nombre: string
  imagen: string
}

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private endPoint: string = 'https://api.giphy.com/v1/gifs/search'
  private apiKey: string = 'IQR31m1u3nrS4KBXa4M2dFMkM3X73sj3'
  private _gifs: GifApi[] = []
  private _historial: string[] = []


  constructor(private http: HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial') || '[]')
    if (this._historial.length>0) {
      this._agregarResultados(this.historial[0])
    }
  }
  
  get historial(){
    return [...this._historial]
  }

  get gifs(){
    return [...this._gifs]
  }

  // buscar 
  private _agregarBusqueda(busqueda:string){
    this._historial.unshift(busqueda)
    localStorage.setItem('historial', JSON.stringify(this._historial))
  }


  private _agregarResultados(busqueda: string){
    // Dentro las <> del get va la interface del apikey
    this.http.get<APISearch>(`${this.endPoint}?api_key=${this.apiKey}&q=${busqueda}&limit=10`)
    .subscribe((res)=>{
      this._gifs = res.data     
    })
  }

  buscar(busqueda: string){
    this._agregarBusqueda(busqueda)
    this._agregarResultados(busqueda)
  }

  buscarSidebar(busqueda: string){
    this._agregarResultados(busqueda)
  }

}
