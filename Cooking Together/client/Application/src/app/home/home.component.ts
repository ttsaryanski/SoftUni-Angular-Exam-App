import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeComponent } from '../recipes/recipe/recipe.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RecipeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
