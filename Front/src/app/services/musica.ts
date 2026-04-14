import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Musica {

  private apiUrl = 'http://localhost:3000'; // luego lo cambias

  constructor(private http: HttpClient) {}

  getTopCanciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/canciones`);
  }

  getTopArtistas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/artistas`);
  }

  agregarCancion(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/canciones`, data);
  }
}