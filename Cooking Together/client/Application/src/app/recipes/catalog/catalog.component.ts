import { Component } from '@angular/core';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../../types/recipe';
import { RecipeComponent } from '../recipe/recipe.component';
import { ErrorMsgComponent } from '../../core/error-msg/error-msg.component';
import { ErrorMsgService } from '../../core/error-msg/error-msg.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [LoaderComponent, RecipeComponent, ErrorMsgComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  recipes: Recipe[] = [];
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor(
    private recipeService: RecipesService,
    private errorMsgService: ErrorMsgService
  ) {
    this.errorMsgService.apiError$.subscribe((err) => {
      this.hasError = !!err;
    });
  }

  ngOnInit(): void {
    this.recipeService.getRecipe().subscribe({
      next: (recipes) => {
        this.hasError = false;
        this.errorMsgService.clearError();
        this.recipes = recipes;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      },
    });
  }
}
