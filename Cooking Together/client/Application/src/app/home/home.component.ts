import { Component } from '@angular/core';
import { RecipeComponent } from "../recipe/recipe.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
