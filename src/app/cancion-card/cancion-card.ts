import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cancion } from '../models/cancion';

@Component({
  selector: 'app-cancion-card',
  standalone: true,
  imports: [],
  templateUrl: './cancion-card.html',
  styleUrl: './cancion-card.css'
})
export class CancionCard {

  @Input() cancion!: Cancion;
  @Output() agregarFavorito = new EventEmitter<Cancion>();

  onAgregarFavorito() {
    this.agregarFavorito.emit(this.cancion);
  }
}