import { Component, inject, HostListener, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Musica } from '../servicios/musica';
import { AuthService } from '../servicios/auth';
import { BusCancio } from '../interfaces/bus-cancio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  @Output() logoutEvent = new EventEmitter<any>();

  usuario: any = null;
  private busca = inject(Musica);
  private router = inject(Router);
  private auth = inject(AuthService);
  public resultados: BusCancio[] = [];
  public mostrarResultados = false;

  @HostListener('document:click', ['$event'])
  clickFuera(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.position-relative')) {
      this.mostrarResultados = false;
    }
  }

  ngOnInit() {
    this.cargarUsuario();

    this.auth.usuarioCambio$.subscribe(usuario => {
      this.usuario = usuario;
      this.logoutEvent.emit(usuario);
    });
  }

  cargarUsuario() {
    if (typeof window !== 'undefined' && localStorage) {
      this.usuario = JSON.parse(localStorage.getItem('usuario') || 'null');
    } else {
      this.usuario = null;
    }
  }

  logout() {
    localStorage.removeItem('usuario');
    this.auth.notificarLogout();
    this.usuario = null;
    this.logoutEvent.emit(null); 
    this.router.navigate(['/login']);
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

  seleccionar(event: Event, id: number) {
    event.stopPropagation();
    this.mostrarResultados = false;
    this.router.navigate(['/detalle', id]);
  }
}