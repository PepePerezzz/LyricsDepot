import { Component, inject, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Musica } from '../servicios/musica';
import { BusCancio } from '../interfaces/bus-cancio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  private busca = inject(Musica);
  public resultados: BusCancio[] = [];
  public mostrarResultados = false;

  @HostListener('document:click', ['$event'])
  clickFuera(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.position-relative')) {
      this.mostrarResultados = false;
    }
  }

  buscar(termino: string) {
    if (termino.length === 0) {
      this.mostrarResultados = false;
      this.resultados = [];
      return;
    }

    this.busca.postBusqueda(termino).subscribe({
      next: (respuesta: BusCancio[]) => {
        this.resultados = respuesta;
        this.mostrarResultados = true;
      }
    });
  }
}