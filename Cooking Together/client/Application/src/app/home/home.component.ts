import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from '../shared/loader/loader.component';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../types/recipe';
import { RecipeComponent } from '../recipes/recipe/recipe.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LoaderComponent, RecipeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [];
  isLoading: boolean = true;

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipeService.getTopThreeRecipe().subscribe((recipes) => {
      this.recipes = recipes;
      this.isLoading = false;
    });
  }
}
