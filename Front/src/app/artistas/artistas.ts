import { Component, OnInit } from '@angular/core';
import { Musica } from '../services/musica';

@Component({
  selector: 'app-artistas',
  standalone: true,
  imports: [],
  templateUrl: './artistas.html',
  styleUrls: ['./artistas.css'],
})
export class Artistas implements OnInit {

  artistas: any[] = [];

  constructor(private musica: Musica) {}

  ngOnInit() {
    this.musica.getTopArtistas().subscribe({
      next: (data) => {
        this.artistas = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}