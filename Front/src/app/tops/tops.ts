import { Component, inject, resource } from '@angular/core';
import { Musica } from '../services/musica';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-tops',
  standalone: true,
  templateUrl: './tops.html',
  styleUrl: './tops.css',
})
export class Tops {
  private musica = inject(Musica);

  cancionesResource = resource({
    loader: async () => {
      const data = await lastValueFrom(this.musica.getTopCanciones());

      return data.map((c, index) => ({
        ...c,
        posicion: index + 1,
      }));
    }
  });
}