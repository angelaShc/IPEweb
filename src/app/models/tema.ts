import { Component } from "@angular/core";
import { Contenido } from "../service/contenido";

@Component({
  selector: 'tema-detail',
  standalone: true,
  templateUrl: './tema-detail.html',
  styleUrl: './tema-detail.css'
})
export class TemaDetailComponent {
  constructor(public contenido: Contenido) {}
    onTitulo(value: string) {
    this.contenido.updateSelected({ titulo: value });
    }
    onDescripcion(value: string) {
    this.contenido.updateSelected({ descripcion: value });
    }
    onMaterial(value: string) {
    const arr =value.split('\n').map(s => s.trim()).filter(Boolean);
    this.contenido.updateSelected({ material: arr });
    }
    onUrl(value: string) {
    this.contenido.updateSelected({ url: value });
    }
    
}

export interface Secciones {
  titulo: string;
  descripcion: string;
  material: string[]; // ej: contenido, explicaciones
  url?: string;
  color?: string;
}