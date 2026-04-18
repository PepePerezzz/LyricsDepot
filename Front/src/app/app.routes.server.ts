import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'detalle/:id',
    renderMode: RenderMode.Server  // dinámico, se renderiza por petición
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender  // el resto se prerenderiza sin problema
  }
];