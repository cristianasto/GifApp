import { Component } from '@angular/core';
import { Gif, GifService } from '../service/gif.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {
  
  constructor(private gifService: GifService){}

  get gifs(){
    return this.gifService.gifs
  }

}
