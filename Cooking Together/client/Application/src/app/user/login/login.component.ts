import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  setButtonAttributes,
  setEmailErrorClass,
  setPassErrorClass,
} from '../../utils/setClasses';
import { EmailDirective } from '../../directives/email.directive';
import { ErrorMsgComponent } from '../../core/error-msg/error-msg.component';
import { UserService } from '../user.service';
import { ErrorMsgService } from '../../core/error-msg/error-msg.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective, ErrorMsgComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  hasError: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private errorMsgService: ErrorMsgService
  ) {
    this.errorMsgService.apiError$.subscribe((err) => {
      this.hasError = !!err;
    });
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe({
      next: () => {
        this.hasError = false;
        this.errorMsgService.clearError();
        this.router.navigate(['/home']);
        form.reset();
      },
      error: () => {
        this.hasError = true;
      },
    });
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
