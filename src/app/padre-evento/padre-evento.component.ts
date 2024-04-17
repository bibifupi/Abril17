import { Component } from '@angular/core';
import { HijoEventoComponent } from '../hijo-evento/hijo-evento.component';

@Component({
  selector: 'app-padre-evento',
  standalone: true,
  imports: [HijoEventoComponent],
  templateUrl: './padre-evento.component.html',
  styleUrl: './padre-evento.component.css'
})
export class PadreEventoComponent {
recibirDato(dato:string) {
alert(`El dato recibido es ${dato}`)
}

}
