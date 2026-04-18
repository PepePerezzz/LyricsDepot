import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../servicios/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  correo: string = '';
  contrasena: string = '';

  constructor(private auth: AuthService,private router: Router) {}

  login() {
    const data = {
      correo: this.correo,
      contrasena: this.contrasena
    };

    this.auth.login(data).subscribe({
      next: (res) => {
        localStorage.setItem('usuario', JSON.stringify(res.encontrado));
        this.auth.notificarLogin(res.encontrado);
        Swal.fire({
          icon: 'success',
          title: 'Sesion iniciada correctamente',
          text: 'Bienvenido a LyricsDepot',
          confirmButtonColor: '#000'
        });  
        this.router.navigate(['/']);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.error?.mensaje || 'No se pudo iniciar sesion',
          confirmButtonColor: '#000'
        });
      }
    });
  }
}