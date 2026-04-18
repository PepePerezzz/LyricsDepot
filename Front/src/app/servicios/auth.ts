import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = 'http://localhost:3000/usuarios';
  private usuarioCambio = new Subject<any>();
  usuarioCambio$ = this.usuarioCambio.asObservable();

  constructor(private http: HttpClient) {}

  registro(data: any) {
    return this.http.post(`${this.API}/users`, data);
  }

  login(data: { correo: string; contrasena: string }): Observable<any> {
    return this.http.post(`${this.API}/login`, data);
  }

  notificarLogin(usuario: any) {
    this.usuarioCambio.next(usuario);
  }

  notificarLogout() {
    this.usuarioCambio.next(null);
  }
}