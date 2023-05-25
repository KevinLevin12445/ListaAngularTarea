import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoArticulosComponent } from './listado-articulos/listado-articulos.component'; // Importa el componente

@NgModule({
  declarations: [
    AppComponent,
    ListadoArticulosComponent // Declara el componente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
