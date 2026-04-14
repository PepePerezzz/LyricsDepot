import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./inicio/inicio').then(m => m.Inicio) },
  { path: 'tops', loadComponent: () => import('./tops/tops').then(m => m.Tops) },
  { path: 'artistas', loadComponent: () => import('./artistas/artistas').then(m => m.Artistas) },
  { path: 'detalle/:id', loadComponent: () => import('./detalle/detalle').then(m => m.Detalle) },
  { path: 'buscador', loadComponent: () => import('./buscador/buscador').then(m => m.Buscador) },
  { path: 'contacto', loadComponent: () => import('./contacto/contacto').then(m => m.Contacto) },
  { path: 'perfil', loadComponent: () => import('./perfil/perfil').then(m => m.Perfil) },
  { path: '**', loadComponent: () => import('./not-found/not-found').then(m => m.NotFound) }
];