import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Imagenes {
  private http = inject(HttpClient);
  
  postImagen(data: FormData): Observable<any> {
    return this.http.post('http://2.24.211.213:3000/imagenes/subir', data);
  }

  getImagenes(id: number): Observable<{url: string}[]> {
    return this.http.get<{url: string}[]>(`http://2.24.211.213:3000/imagenes/imagenes/${id}`);
  }

}
