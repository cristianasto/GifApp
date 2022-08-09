import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../service/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'

})
export class BusquedaComponent  {

  @ViewChild('textoBuscar') textoBuscar!:ElementRef<HTMLInputElement>
  
  constructor(private gifService: GifService){}

  buscar(){
    const valor = this.textoBuscar.nativeElement.value
    
    this.gifService.buscar(valor)
    
    this.textoBuscar.nativeElement.value = ''
  }
  
}
