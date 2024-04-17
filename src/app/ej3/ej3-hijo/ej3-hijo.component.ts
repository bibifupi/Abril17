import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ej3-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ej3-hijo.component.html',
  styleUrl: './ej3-hijo.component.css'
})
export class Ej3HijoComponent {
@Output()
llamadaPadre:EventEmitter<string>=new EventEmitter();
opcion:string="";
opciones:string[]=["JAVA","JSON","JS"];
enviarPadre(value:string){
  this.llamadaPadre.emit(this.opcion);
}
}
