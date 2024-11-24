import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  setButtonAttributes,
  setEmailErrorClass,
  setNameErrorClass,
  setPassErrorClass,
  setRePassErrorClass,
} from '../../utils/setClasses';
import { EmailDirective } from '../../directives/email.directive';
import { MatchPasswordDirective } from '../../directives/match-password.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective, MatchPasswordDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);
  }

  setNameClass(form: any) {
    return setNameErrorClass(form);
  }

  setEmailClass(form: any) {
    return setEmailErrorClass(form);
  }

  setPasswordClass(form: any) {
    return setPassErrorClass(form);
  }

  setRePassClass(form: any) {
    return setRePassErrorClass(form);
  }

  setButton(form: any) {
    return setButtonAttributes(form);
  }
}
