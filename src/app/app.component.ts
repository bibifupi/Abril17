import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoEventoComponent } from './hijo-evento/hijo-evento.component';
import { HijoMensajeComponent } from './hijo-mensaje/hijo-mensaje.component';
import { PadreEventoComponent } from './padre-evento/padre-evento.component';
import { PadreMensajeComponent } from './padre-mensaje/padre-mensaje.component';
import { Ej1HijoComponent } from './ej1-hijo/ej1-hijo.component';
import { Ej1PadreComponent } from './ej1-padre/ej1-padre.component';
import { Ej2ListaComponent } from './ej2/ej2-hijo/ej2-lista.component';
import { Ej2CestaComponent } from './ej2/ej2-padre/ej2-cesta.component';
import { Ej3HijoComponent } from './ej3/ej3-hijo/ej3-hijo.component';
import { Ej3PadreComponent } from './ej3/ej3-padre/ej3-padre.component';
import { Ej4HijoComponent } from './ej4/ej4-hijo/ej4-hijo.component';
import { Ej4PadreComponent } from './ej4/ej4-padre/ej4-padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HijoEventoComponent,HijoMensajeComponent,PadreEventoComponent,PadreMensajeComponent,Ej1HijoComponent,Ej1PadreComponent,Ej2ListaComponent,Ej2CestaComponent,Ej3HijoComponent, Ej3PadreComponent,Ej4HijoComponent,Ej4PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril17';
}
