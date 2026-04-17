import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Imagenes {
  private http = inject(HttpClient);
  
  postImagen(data: FormData): Observable<any> {
    return this.http.post('http://localhost:3000/imagenes/subir', data);
  }



}
