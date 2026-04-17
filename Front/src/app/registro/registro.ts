import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../servicios/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.html'
})
export class Registro {

  nombre = '';
  correo = '';
  contrasena = '';

  constructor(private auth: AuthService,private router: Router) {}

  registro() {
    const data = {
      nombre: this.nombre,
      correo: this.correo,
      contrasena: this.contrasena
    };

    this.auth.registro(data).subscribe({
      next: (res) => {
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Cuenta creada',
        text: 'Bienvenido a LyricsDepot',
        confirmButtonColor: '#000'
      });        
      this.router.navigate(['/login']); 

      },
      error: (err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.error?.mensaje || 'No se pudo registrar',
          confirmButtonColor: '#000'
        });
      }
    });
  }
}