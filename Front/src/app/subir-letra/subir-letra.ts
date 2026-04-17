import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Musica } from '../servicios/musica';
import { Cancion } from '../models/cancion';
import { Imagenes } from '../servicios/imagenes';

@Component({
  selector: 'app-subir-letra',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './subir-letra.html',
  styleUrl: './subir-letra.css'
})
export class SubirLetra {
  private subirImagen = inject(Imagenes);
  private fb = inject(FormBuilder);
  private subirCancion = inject(Musica);
  private router = inject(Router);

  imagenFile: File | null = null;
  enviado = false;
  exitoso = false;

  onFileChange(event: any) {
    this.imagenFile = event.target.files[0];
  }

  form = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    artista: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    albun: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    fecha: ['', [Validators.required, Validators.min(1900), Validators.max(2026)]],
    letra: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(5000)]],
  });

  get f() { return this.form.controls; }

  guardar() {
    this.enviado = true;

    if (this.form.invalid || !this.imagenFile) return;

    this.subirCancion.postCancion(this.form.value as Cancion).subscribe({
      next: (id) => {
        const formImg = new FormData();
        formImg.append('imagenes', this.imagenFile!);
        formImg.append('id_producto', String(id));
        console.log('imagen:', this.imagenFile);
        console.log('id:', id);

        this.subirImagen.postImagen(formImg).subscribe({
          next: () => {
            this.exitoso = true;
            this.router.navigate(['/']);
          },
          error: (err) => console.error('Error imagen', err)
        });
      },
      error: (err) => console.error('Error canción', err)
    });
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}