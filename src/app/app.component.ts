import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Lista de Artículos</h1>
    <app-listado-articulos [productos]="productos"></app-listado-articulos>
  `,
})
export class AppComponent {
  productos = [
    { nombre: 'Producto 1', precio: 10 },
    { nombre: 'Producto 2', precio: 20 },
    { nombre: 'Producto 3', precio: 30 },
    { nombre: 'Producto 4', precio: 40 },
    { nombre: 'Producto 5', precio: 50 },
  ];
}
