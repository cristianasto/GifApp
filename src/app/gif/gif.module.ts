import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './gif-page/gif-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { SidebarComponent } from './sidebar/sidebar.component';





@NgModule({
  declarations: [
    GifPageComponent,
    BusquedaComponent,
    ResultadosComponent,
    SidebarComponent
  ],
  exports:[
    GifPageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifModule { }
