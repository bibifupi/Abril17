import { Component } from '@angular/core';
import { Persona } from '../../_modelo/Persona';
import { Ej1HijoComponent } from '../../ej1-hijo/ej1-hijo.component';
import { Ej4HijoComponent } from '../ej4-hijo/ej4-hijo.component';

@Component({
  selector: 'app-ej4-padre',
  standalone: true,
  imports: [Ej4HijoComponent],
  templateUrl: './ej4-padre.component.html',
  styleUrl: './ej4-padre.component.css'
})
export class Ej4PadreComponent {
  personas: Persona[] = [];
  recibirDato(persona: Persona) {
    this.personas.push(persona);
  }

  borrarUltimoNombre() {
    this.personas.pop();
  }

  filtrarEdades() {
    this.personas = this.personas.filter(persona => persona.edad >= 18);
  }

  calcularDobleEdad() {
    this.personas.map(persona => persona.edad = persona.edad * 2);
  }

}
