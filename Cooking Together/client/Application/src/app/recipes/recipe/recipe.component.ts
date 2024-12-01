import { Component, Input } from '@angular/core';
import { Recipe } from '../../types/recipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent {
  @Input() recipe!: Recipe;
}
