import { Component } from '@angular/core';
import { Ej2ListaComponent } from '../ej2-hijo/ej2-lista.component';

@Component({
  selector: 'app-ej2-cesta',
  standalone: true,
  imports: [Ej2ListaComponent],
  templateUrl: './ej2-cesta.component.html',
  styleUrl: './ej2-cesta.component.css'
})
export class Ej2CestaComponent {
  compras:string[]=[];
  recibirDato(dato:string){
    this.compras.push(dato);
  }
}
