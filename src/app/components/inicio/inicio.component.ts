import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  form: FormGroup; // Declarar form como un FormGroup
  selected: Date | null | undefined;
  constructor() {
    this.form = new FormGroup({
      // Aquí debes definir tus campos y sus validaciones, por ejemplo:
      // 'nombre': new FormControl('', Validators.required),
      // 'email': new FormControl('', [Validators.required, Validators.email]),
    });
  }

  // Otro código de tu componente si es necesario

}