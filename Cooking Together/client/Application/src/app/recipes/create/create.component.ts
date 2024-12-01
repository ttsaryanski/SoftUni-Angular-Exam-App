import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  setButtonAttributes,
  setImgErrorClass,
  setNameErrorClass,
} from '../../utils/setClasses';
import { ImageUrlDirective } from '../../directives/image-url.directive';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from '../../core/error-msg/error-msg.component';
import { ErrorMsgService } from '../../core/error-msg/error-msg.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, ImageUrlDirective, ErrorMsgComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  hasError: boolean = false;

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private errorMsgService: ErrorMsgService
  ) {
    this.errorMsgService.apiError$.subscribe((err) => {
      this.hasError = !!err;
    });
  }

  create(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { title, description, ingredients, instructions, imageUrl } =
      form.value;

    this.recipesService
      .createRecipe(title, description, ingredients, instructions, imageUrl)
      .subscribe({
        next: () => {
          this.hasError = false;
          this.errorMsgService.clearError();
          this.router.navigate(['/catalog']);
          form.reset();
        },
        error: () => {
          this.hasError = true;
        },
      });
  }

  setClass(form: any) {
    return setNameErrorClass(form);
  }

  setImgClass(form: any) {
    return setImgErrorClass(form);
  }

  setButton(form: any) {
    return setButtonAttributes(form);
  }
}
