import { HttpClient } from '@angular/common/http';
import {inject, Injectable } from '@angular/core';
import { Cancion } from '../models/cancion';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Musica {
  private http = inject(HttpClient);

  private url: string = "http://localhost:3000/musica";

  postCancion(data: Cancion): Observable<number>{
      return this.http.post<{ idCancion: number}>(`${this.url}/subir`,data).pipe(map((res)=>res.idCancion));
  }

  getCancionById(id: number): Observable<Cancion> {
    return this.http
      .get<{ mensaje: string; cancion: Cancion }>(
        `${this.url}/consulta/${id}`
      )
      .pipe(map(res => res.cancion));
  }

getTopCanciones(): Observable<any[]> {
  return this.http
    .get<{ mensaje: string; lista: any[] }>(
      'http://localhost:3000/musica/favoritas'
    )
    .pipe(map(res => res.lista));
}
}


