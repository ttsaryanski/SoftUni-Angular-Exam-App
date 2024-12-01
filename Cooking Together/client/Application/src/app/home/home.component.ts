import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeComponent } from '../recipes/recipe/recipe.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../types/recipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [];
  isLoading: boolean = true;

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipeService.getRecipe(3).subscribe((recipes) => {
      this.recipes = recipes;
      this.isLoading = false;
    });
  }
}
