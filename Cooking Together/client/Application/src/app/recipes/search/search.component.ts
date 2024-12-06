import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../../types/recipe';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RecipeComponent } from '../recipe/recipe.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [LoaderComponent, RecipeComponent, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  recipes: Recipe[] = [];
  isLoading: boolean = true;
  query: string = '';

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipeService.getRecipe().subscribe((recipes) => {
      this.recipes = recipes;
      this.isLoading = false;
    });
  }

  search(form: NgForm) {
    this.query = form.value.query;
    this.recipeService.getRecipe(undefined, this.query).subscribe((recipes) => {
      this.recipes = recipes;
      this.isLoading = false;
    });
  }
}
