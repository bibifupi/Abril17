import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo-evento.component.html',
  styleUrl: './hijo-evento.component.css'
})
export class HijoEventoComponent {

  @Output()
  llamadaPadre:EventEmitter<string> = new EventEmitter();
  nombre:string='';

  enviarPadre() {
    this.llamadaPadre.emit(this.nombre);
    }
}
