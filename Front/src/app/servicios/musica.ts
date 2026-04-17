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
  

}
