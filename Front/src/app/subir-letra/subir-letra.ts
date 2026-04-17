import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Musica } from '../servicios/musica';
import { Cancion } from '../models/cancion';
import { Imagenes } from '../servicios/imagenes';
import Swal from 'sweetalert2';

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

const darkSwal = Swal.mixin({
  background: '#121212',
  color: '#ffffff',
  confirmButtonColor: '#facc15',
  cancelButtonColor: '#333'
});

darkSwal.fire({
  title: '¿Publicar letra?',
  text: 'Se subirá la canción a la plataforma',
  icon: 'question',
  showCancelButton: true,
  confirmButtonText: 'Sí, publicar',
  cancelButtonText: 'Cancelar'
}).then((result) => {

  if (result.isConfirmed) {

    this.subirCancion.postCancion(this.form.value as Cancion).subscribe({
      next: (id) => {

        const formImg = new FormData();
        formImg.append('imagenes', this.imagenFile!);
        formImg.append('id_producto', String(id));

        this.subirImagen.postImagen(formImg).subscribe({
          next: () => {

            darkSwal.fire({
              icon: 'success',
              title: '¡Letra subida!',
              text: 'Se publicó correctamente',
              timer: 2000,
              showConfirmButton: false
            });

            setTimeout(() => {
              this.router.navigate(['/']);
            }, 2000);

          },
          error: () => {

            darkSwal.fire({
              icon: 'error',
              title: 'Error al subir imagen',
              text: 'Intenta nuevamente'
            });

          }
        });

      },
      error: () => {

        darkSwal.fire({
          icon: 'error',
          title: 'Error al subir canción',
          text: 'No se pudo guardar la información'
        });

      }
    });

  }

});
}

  cancelar() {
    this.router.navigate(['/']);
  }
}