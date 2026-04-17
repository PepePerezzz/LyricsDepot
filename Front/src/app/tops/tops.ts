import { Component, inject, OnInit } from '@angular/core';
import { Musica } from '../services/musica';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tops',
  standalone: true,
  imports: [],
  templateUrl: './tops.html',
  styleUrl: './tops.css',
})
export class Tops implements OnInit {

  private musica = inject(Musica);
  private route = inject(ActivatedRoute);

  canciones: any[] = [];

  ngOnInit() {
    this.cargarTop();
  }

  cargarTop() {
    this.musica.getTopCanciones().subscribe({
      next: (data) => {
        this.canciones = data.map((c, index) => ({
          ...c,
          posicion: index + 1,
        }));
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}