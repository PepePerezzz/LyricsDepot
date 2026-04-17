import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  template: `<h1>Resultados para: {{ terminoBusqueda }}</h1>`
})
export class BuscadorComponent implements OnInit {
  terminoBusqueda: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Escuchamos los cambios en los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.terminoBusqueda = params['q'];
      this.realizarBusqueda(this.terminoBusqueda);
    });
  }

  realizarBusqueda(termino: string) {
    // Aquí es donde llamarías a tu servicio de música o letras
    console.log('Buscando en la base de datos:', termino);
  }
}