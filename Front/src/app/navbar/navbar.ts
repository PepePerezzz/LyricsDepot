import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  // Inyectamos el router para poder navegar por código
  constructor(private router: Router) {}

  buscar(termino: string) {
    const valor = termino.trim();
    if (valor.length === 0) return; // No hacer nada si está vacío

    console.log('Buscando:', valor);
    
    // Redirigimos a la ruta del buscador pasando el término como parámetro
    // Ejemplo: /buscador?q=lady+gaga
    this.router.navigate(['/buscador'], {
      queryParams: { q: valor }
    });
  }
}