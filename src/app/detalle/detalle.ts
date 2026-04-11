import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cancion } from '../models/cancion';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle implements OnInit {

  private ruta = inject(ActivatedRoute);
  private router = inject(Router);

  cancion: Cancion | null = null;
  mostrarLetraCompleta = false;
  agregadoAFavoritos = false;

  // Datos simulados mientras conectamos el backend
  canciones: Cancion[] = [
    {
      id: 1,
      titulo: 'Cruel Summer',
      artista: 'Taylor Swift',
      album: 'Lover',
      anio: 2019,
      duracion: '2:58',
      imagen: 'https://picsum.photos/seed/song1/800/400',
      genero: 'Pop',
      letra: `Fever dream high in the quiet of the night\nYou know that I caught it\nBad, bad boy, shiny toy with a price\nYou know that I bought it\n\nRunning through the garden\nWhere nothing bothered us\nPlaying stupid games in the name of fun\n\nIt's new, the shape of your body\nIt's blue, the feeling I've got\nAnd it's ooh, whoa oh\nCruel summer\nIt's cool, that's what I tell 'em\nNo rules in breakable heaven\nBut ooh, whoa oh\nCruel summer with you`
    },
    {
      id: 2,
      titulo: 'Flowers',
      artista: 'Miley Cyrus',
      album: 'Endless Summer Vacation',
      anio: 2023,
      duracion: '3:21',
      imagen: 'https://picsum.photos/seed/song2/800/400',
      genero: 'Pop',
      letra: `We were good, we were gold\nKinda dream that can't be sold\nWe were right till we weren't\nBuilt a home and watched it burn\n\nI didn't wanna leave you\nI didn't wanna lie\nStarted to cry but then remembered I\n\nI can buy myself flowers\nWrite my name in the sand\nTalk to myself for hours\nSay things you don't understand\nI can take myself dancing\nAnd I can hold my own hand\nYeah, I can love me better than you can`
    },
    {
      id: 3,
      titulo: 'As It Was',
      artista: 'Harry Styles',
      album: "Harry's House",
      anio: 2022,
      duracion: '2:37',
      imagen: 'https://picsum.photos/seed/song3/800/400',
      genero: 'Pop',
      letra: `Holdin' me back\nGravity's holdin' me back\nI want you to hold out the palm of your hand\nWhy don't we leave it at that?\n\nNothin' to say\nWhen everything gets in the way\nSeems you cannot be replaced\nAnd I'm the one who will stay\n\nIn this world, it's just us\nYou know it's not the same as it was\nIn this world, it's just us\nYou know it's not the same as it was\nAs it was, as it was`
    },
  ];

  ngOnInit() {
    this.ruta.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.cancion = this.canciones.find(c => c.id === id) || null;
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