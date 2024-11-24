import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  setButtonAttributes,
  setEmailErrorClass,
  setPassErrorClass,
} from '../../utils/setClasses';
import { EmailDirective } from '../../directives/email.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);
  }

  setEmailClass(form: any) {
    return setEmailErrorClass(form);
  }

  setPasswordClass(form: any) {
    return setPassErrorClass(form);
  }

  setButton(form: any) {
    return setButtonAttributes(form);
  }
}
