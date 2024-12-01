import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  setButtonAttributes,
  setImgErrorClass,
  setNameErrorClass,
} from '../../utils/setClasses';
import { ImageUrlDirective } from '../../directives/image-url.directive';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, ImageUrlDirective],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  create(form: NgForm) {}

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
