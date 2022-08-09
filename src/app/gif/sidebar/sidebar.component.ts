import { Component } from '@angular/core';
import { GifService } from '../service/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {
  
  constructor(private gifService:GifService){}
  
  get historial(){
    return this.gifService.historial
  }
  
  buscar(busqueda: string){
    this.gifService.buscarSidebar(busqueda)
  }

}
