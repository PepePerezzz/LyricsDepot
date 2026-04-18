import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rating.html',
  styleUrls: ['./rating.css']
})
export class RatingComponent {

  @Input() tituloCancion: string = '';
  @Output() calificacionEnviada = new EventEmitter<{stars: number, comentario: string}>();

  ratingData = {
    stars: 0,
    comentario: ''
  };

  enviarCalificacion() {
    console.log('Calificación recibida:', this.ratingData);

    this.calificacionEnviada.emit(this.ratingData);

    Swal.fire({
      title: '¡Gracias por tu opinión!',
      text: `Nos diste ${this.ratingData.stars} estrellas para "${this.tituloCancion}". ¡Lo apreciamos!`,
      icon: 'success',
      confirmButtonColor: '#1db954'
    });

    this.ratingData = { stars: 0, comentario: '' };
  }
}