import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Musica } from '../servicios/musica';
import { BusCancio } from '../interfaces/bus-cancio';
import { Buscador } from '../buscador/buscador';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,Buscador],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  private router = inject(Router);
  private busca = inject(Musica);
  public resultados: BusCancio[] = [];

  buscar(termino: string) {
    if (termino.length === 0) return;
    

    this.busca.postBusqueda(termino).subscribe({
      next: (respuesta: BusCancio[]) => {
        this.resultados = respuesta;
        this.router.navigate(['/buscador']);
      }
    });
    
  
  
  }
}