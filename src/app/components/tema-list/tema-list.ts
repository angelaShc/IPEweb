import { Component } from '@angular/core';
import { Contenido } from '../../service/contenido';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-tema-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tema-list.html',
  styleUrl: './tema-list.css',
})
export class TemaList {
  constructor(public contenido: Contenido) {}
}
