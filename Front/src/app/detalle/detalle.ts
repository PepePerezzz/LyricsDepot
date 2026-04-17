import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cancion } from '../models/cancion';
import { RouterLink } from '@angular/router';
import { Musica } from '../servicios/musica';
import { switchMap } from 'rxjs';

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
  private cd = inject(ChangeDetectorRef);

  cancion: Cancion | null = null;
  mostrarLetraCompleta = false;
  agregadoAFavoritos = false;

  ngOnInit() {
    this.ruta.paramMap.pipe(
      switchMap(params => {
        this.cancion = null;
        this.mostrarLetraCompleta = false;
        this.agregadoAFavoritos = false;
        const id = Number(params.get('id'));
        return this.musica.getCancionById(id);
      })
    ).subscribe({
      next: (data) => {
        this.cancion = data;
        this.cd.detectChanges();
      },
      error: () => {
        this.cancion = null;
        this.cd.detectChanges();
      }
    });
  }

  toggleLetra() { this.mostrarLetraCompleta = !this.mostrarLetraCompleta; }
  toggleFavorito() { this.agregadoAFavoritos = !this.agregadoAFavoritos; }
  regresar() { this.router.navigate(['/']); }
}