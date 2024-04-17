import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ej2-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ej2-lista.component.html',
  styleUrl: './ej2-lista.component.css'
})
export class Ej2ListaComponent {
  @Output()
  llamadaPadre: EventEmitter<string> = new EventEmitter();
  enviarPadre(nombre: string) {
    this.llamadaPadre.emit(nombre);
  }
}
