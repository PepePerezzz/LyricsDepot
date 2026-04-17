import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RatingComponent } from '../rating/rating';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, RatingComponent],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})

export class Inicio {

  noticiaDestacada = {
    titulo: 'Taylor Swift rompe récords con su nueva gira mundial',
    descripcion: 'La cantante estadounidense superó todas las expectativas con más de 5 millones de entradas vendidas en las primeras 24 horas.',
    imagen: 'https://picsum.photos/seed/noticia1/1200/500',
    fecha: '11 Abril 2026'
  };

  topCanciones = [
    { id: 1, titulo: 'Cruel Summer', artista: 'Taylor Swift', imagen: 'https://picsum.photos/seed/song1/60/60', posicion: 1 },
    { id: 2, titulo: 'Flowers', artista: 'Miley Cyrus', imagen: 'https://picsum.photos/seed/song2/60/60', posicion: 2 },
    { id: 3, titulo: 'As It Was', artista: 'Harry Styles', imagen: 'https://picsum.photos/seed/song3/60/60', posicion: 3 },
    { id: 4, titulo: 'Blinding Lights', artista: 'The Weeknd', imagen: 'https://picsum.photos/seed/song4/60/60', posicion: 4 },
    { id: 5, titulo: 'Stay', artista: 'The Kid LAROI', imagen: 'https://picsum.photos/seed/song5/60/60', posicion: 5 },
  ];

  topEnEspanol = [
    { id: 6, titulo: 'La Toxica', artista: 'Farruko', imagen: 'https://picsum.photos/seed/song6/60/60', posicion: 1 },
    { id: 7, titulo: 'Hawái', artista: 'Maluma', imagen: 'https://picsum.photos/seed/song7/60/60', posicion: 2 },
    { id: 8, titulo: 'Tití Me Preguntó', artista: 'Bad Bunny', imagen: 'https://picsum.photos/seed/song8/60/60', posicion: 3 },
    { id: 9, titulo: 'Bzrp Music Session 53', artista: 'Bizarrap', imagen: 'https://picsum.photos/seed/song9/60/60', posicion: 4 },
    { id: 10, titulo: 'Shakira: Bzrp Session', artista: 'Shakira', imagen: 'https://picsum.photos/seed/song10/60/60', posicion: 5 },
  ];

  noticias = [
    { id: 1, titulo: 'Bad Bunny anuncia nuevo álbum para este verano', categoria: 'Lanzamiento', imagen: 'https://picsum.photos/seed/n1/400/200', fecha: '10 Abril 2026' },
    { id: 2, titulo: 'Los Grammy revelan la lista de nominados 2026', categoria: 'Premios', imagen: 'https://picsum.photos/seed/n2/400/200', fecha: '9 Abril 2026' },
    { id: 3, titulo: 'Coldplay llega a México en su gira Music of the Spheres', categoria: 'Conciertos', imagen: 'https://picsum.photos/seed/n3/400/200', fecha: '8 Abril 2026' },
  ];

  datosCuriosos = [
    { icono: '🎸', dato: 'La canción más larga del mundo dura 639 años. Se llama "As Slow As Possible" de John Cage.' },
    { icono: '🎤', dato: 'Freddie Mercury tenía un rango vocal de casi 4 octavas, algo extremadamente raro.' },
    { icono: '🎵', dato: 'El "Happy Birthday" fue la canción más reconocida del mundo durante décadas, pero sus derechos de autor expiraron en 2016.' },
    { icono: '🎧', dato: 'Los humanos son la única especie que naturalmente sincroniza movimientos con la música.' },
  ];

  cancionDestacada = {
    titulo: 'Bohemian Rhapsody',
    artista: 'Queen',
    anio: 1975,
    imagen: 'https://picsum.photos/seed/queen/400/300',
    descripcion: 'Una de las canciones más icónicas de la historia del rock. Freddie Mercury la escribió en su totalidad y tardó 3 semanas en grabarse debido a su complejidad.',
    curiosidad: '¿Sabías que Bohemian Rhapsody mezcla balada, ópera y hard rock en una sola canción? Fue revolucionaria para su época y rompió todas las reglas del pop comercial.',
    duracion: '5:55',
    album: 'A Night at the Opera'
  };

  anuncios = [
    { imagen: 'https://picsum.photos/seed/ad1/300/250', texto: 'Escucha sin límites', marca: 'Spotify Premium' },
    { imagen: 'https://picsum.photos/seed/ad2/300/250', texto: 'Tu música, en todas partes', marca: 'Apple Music' },
  ];

  mostrarPublicidad = true;

  togglePublicidad() {
  this.mostrarPublicidad = !this.mostrarPublicidad;
  }


}

