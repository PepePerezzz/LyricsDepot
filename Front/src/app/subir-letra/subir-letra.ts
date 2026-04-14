import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subir-letra',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './subir-letra.html',
  styleUrl: './subir-letra.css'
})
export class SubirLetra {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  enviado = false;
  exitoso = false;

  form = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    artista: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    anio: ['', [Validators.required, Validators.min(1900), Validators.max(2026)]],
    duracion: ['', [Validators.required, Validators.pattern(/^\d{1,2}:\d{2}$/)]],
    imagen: ['', [Validators.required, Validators.pattern(/https?:\/\/.+/)]],
    letra: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(5000)]],
  });

  get f() { return this.form.controls; }

  guardar() {
    this.enviado = true;

    if (this.form.invalid) return;

    // Aquí después se conecta al servicio
    console.log('Canción subida:', this.form.value);
    this.exitoso = true;

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}