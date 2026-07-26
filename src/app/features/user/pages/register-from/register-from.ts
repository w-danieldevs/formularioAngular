import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidorPassword } from '../../service/validor-password';


@Component({
  selector: 'app-register-from',
  standalone: false,
  templateUrl: './register-from.html',
  styleUrl: './register-from.scss',
})
export class RegisterFrom {

form: FormGroup;

constructor(private fb: FormBuilder, private validorPassword: ValidorPassword   ) {
  this.form = this.fb.group({
    name: ['', Validators.required, Validators.minLength(3)],
    email: ['', [Validators.required, Validators.email]],
    nameUser: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
    password: ['', Validators.required, Validators.minLength(8)],
    passwordConfirm: ['', Validators.required, Validators.minLength(8)],
    age: ['', [Validators.required, Validators.min(15), Validators.max(90)]],
    terminos: [false, Validators.requiredTrue]
  },
  {
    validators: [this.validorPassword.function()]
  }
    );
}
  invalidado(controlName: string, errorName: string): boolean {

    const control= this.form.get(controlName);

    if(!control) {return true;}

    const haserror= control.hasError(errorName);

    const touched = control.touched;

    return haserror && touched;
  }

  onSubmit(): void {
    if(this.form.valid) {
      console.log('Formulario válido:', this.form.value);
    } else {
      console.log('Formulario inválido');
      this.form.markAllAsTouched();
    }
}
     
}

