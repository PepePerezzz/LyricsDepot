import { Component } from '@angular/core';
import { Musica } from '../services/musica';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tops',
  standalone: true,
  imports: [],
  templateUrl: './tops.html',
  styleUrl: './tops.css',
})
export class Tops {

  canciones: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private musica: Musica
  ) {}
ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const tipo = params.get('tipo');

    this.musica.getTopCanciones().subscribe({
      next: (data) => {
        this.canciones = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  });
}
}
