import { Component } from '@angular/core';
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
  
  ratingData = {
    stars: 0,
    comentario: ''
  };

  enviarCalificacion() {
    // Validar antes de enviar
    if (this.ratingData.stars === 0) return;

    console.log('Calificación recibida:', this.ratingData);
    
    Swal.fire({
      title: '¡Gracias por tu opinión!',
      text: `Nos diste ${this.ratingData.stars} estrellas.`,
      icon: 'success',
      confirmButtonColor: '#1db954'
    }).then(() => {
      // Limpiar después de que el usuario cierre el alert
      this.ratingData = { stars: 0, comentario: '' };
    });
  }
}