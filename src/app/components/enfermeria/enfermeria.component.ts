import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enfermeria',
  templateUrl: './enfermeria.component.html',
  styleUrls: ['./enfermeria.component.css']
})
export class EnfermeriaComponent {
  form: FormGroup; // Declarar form como un FormGroup
  constructor() {
    this.form = new FormGroup({
      // Aquí debes definir tus campos y sus validaciones, por ejemplo:
      // 'nombre': new FormControl('', Validators.required),
      // 'email': new FormControl('', [Validators.required, Validators.email]),
    });
  }

  // Otro código de tu componente si es necesario

}