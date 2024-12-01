import { Component } from '@angular/core';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../../types/recipe';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  recipes: Recipe[] = [];
  isLoading: boolean = true;

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipeService.getRecipe().subscribe((recipes) => {
      this.recipes = recipes;
      this.isLoading = false;
    });
  }
}
