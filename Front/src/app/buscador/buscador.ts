import { Component, Input } from '@angular/core';
import { BusCancio } from '../interfaces/bus-cancio';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css'
})
export class Buscador {
  @Input() resultados: BusCancio[] = [];
}