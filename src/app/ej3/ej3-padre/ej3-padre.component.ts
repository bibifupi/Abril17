import { Component } from '@angular/core';
import { Ej3HijoComponent } from '../ej3-hijo/ej3-hijo.component';

@Component({
  selector: 'app-ej3-padre',
  standalone: true,
  imports: [Ej3HijoComponent],
  templateUrl: './ej3-padre.component.html',
  styleUrl: './ej3-padre.component.css'
})
export class Ej3PadreComponent {
  asignaturas: string[] = [];

  recibirDato(dato: string) {
    this.asignaturas.push(dato);
  }
}
