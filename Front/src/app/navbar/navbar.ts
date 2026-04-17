import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchTerm: string = '';
  // Esto normalmente vendría de un servicio, pero aquí tienes una lista de prueba
  canciones = ['Taylor Swift', 'Miley Cyrus', 'Harry Styles', 'The Weeknd', 'Bad Bunny', 'Queen'];
  resultadosFiltrados: string[] = [];

  constructor(private router: Router) {}

  onSearch() {
    if (this.searchTerm.trim() === '') {
      this.resultadosFiltrados = [];
      return;
    }
    // Filtramos la lista de canciones según lo que escriben
    this.resultadosFiltrados = this.canciones.filter(cancion =>
      cancion.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  seleccionarCancion(cancion: string) {
    this.searchTerm = cancion; // Ponemos el nombre en el input
    this.resultadosFiltrados = []; // Cerramos el desplegable
    this.router.navigate(['/buscar', cancion]); // Redirigimos a la búsqueda
  }
}