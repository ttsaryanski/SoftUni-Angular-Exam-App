import { Component } from '@angular/core';
import { RecipeComponent } from '../recipes/recipe/recipe.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RecipeComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

}
