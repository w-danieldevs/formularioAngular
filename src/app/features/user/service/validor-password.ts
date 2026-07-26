import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn,  } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidorPassword {

  function(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const password = control.get('password');

    const passwordConfirm = control.get('passwordConfirm');

    if(password?.value !== passwordConfirm?.value) {

      return { passwordMismatch: true };
    }

    return null;

  };
}
}
