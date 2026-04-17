import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../servicios/auth';
import { Router } from '@angular/router';

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
        console.log('Login correcto', res);
        localStorage.setItem('usuario', JSON.stringify(res.encontrado));
        alert('Bienvenido');
        this.router.navigate(['/']);
      },
      error: () => {
        alert('Credenciales incorrectas');
      }
    });
  }
}