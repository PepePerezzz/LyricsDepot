import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cancion } from '../models/cancion';
import { RouterLink } from '@angular/router';
import { Musica } from '../servicios/musica';
@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle implements OnInit {
  private musica = inject(Musica);
  private ruta = inject(ActivatedRoute);
  private router = inject(Router);

  cancion: Cancion | null = null;
  mostrarLetraCompleta = false;
  agregadoAFavoritos = false;


  ngOnInit() {
    this.ruta.paramMap.subscribe(params => {
      const idParam = params.get('id');

      if (!idParam) {
        this.cancion = null;
        return;
      }

      const id = Number(idParam);

      this.musica.getCancionById(id).subscribe({
        next: (data) => {
          this.cancion = data;
        },
        error: (err) => {
          console.error("Error cargando canción", err);
          this.cancion = null;
        }
      });
    });
  }

  toggleLetra() {
    this.mostrarLetraCompleta = !this.mostrarLetraCompleta;
  }

  toggleFavorito() {
    this.agregadoAFavoritos = !this.agregadoAFavoritos;
  }

  regresar() {
    this.router.navigate(['/']);
  }
}