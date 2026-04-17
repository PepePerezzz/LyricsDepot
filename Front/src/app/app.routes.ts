import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./inicio/inicio').then(m => m.Inicio) },
  { path: 'tops', loadComponent: () => import('./tops/tops').then(m => m.Tops) },
  { path: 'artistas', loadComponent: () => import('./artistas/artistas').then(m => m.Artistas) },
{ 
  path: 'detalle/:id', 
  loadComponent: () => import('./detalle/detalle').then(m => m.Detalle),
  runGuardsAndResolvers: 'always'
},
  { path: 'contacto', loadComponent: () => import('./contacto/contacto').then(m => m.Contacto) },
  { path: 'letra', loadComponent: () => import('./subir-letra/subir-letra').then(m => m.SubirLetra) },
  { path: 'perfil', loadComponent: () => import('./perfil/perfil').then(m => m.Perfil) },
  { path: 'registro', loadComponent: () => import('./registro/registro').then(m => m.Registro) },
  { path: 'login', loadComponent: () => import('./login/login').then(m => m.Login) },
  { path: 'subir-letra', loadComponent: () => import('./subir-letra/subir-letra').then(m => m.SubirLetra) },
  { path: '**', loadComponent: () => import('./not-found/not-found').then(m => m.NotFound) }

  
];