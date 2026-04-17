import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../servicios/auth';
import { Router } from '@angular/router';

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
        alert('Usuario creado');
        this.router.navigate(['/login']); 

      },
      error: (err) => {
        console.log(err);
        alert('Error al registrar');
      }
    });
  }
}