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
  // Modelo para el template-driven form
  ratingData = {
    stars: 0,
    comentario: ''
  };

  enviarCalificacion() {
    console.log('Calificación recibida:', this.ratingData);
    
    // Alerta de agradecimiento
    Swal.fire({
      title: '¡Gracias por tu opinión!',
      text: `Nos diste ${this.ratingData.stars} estrellas. ¡Lo apreciamos!`,
      icon: 'success',
      confirmButtonColor: '#1db954'
    });

    // Opcional: Limpiar el formulario después de enviar
    this.ratingData = { stars: 0, comentario: '' };
  }
}