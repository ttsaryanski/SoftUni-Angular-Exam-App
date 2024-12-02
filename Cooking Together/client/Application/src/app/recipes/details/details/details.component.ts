import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../types/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../../recipes.service';
import { UserService } from '../../../user/user.service';
import { User, UserForAuth } from '../../../types/user';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  recipe: Recipe | null = null;
  isOwner: boolean = false;
  isLiked: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private userService: UserService,
    private router: Router
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['recipeId'];

    combineLatest([
      this.recipesService.getRecipeById(id),
      this.userService.user$,
    ]).subscribe(([recipe, user]) => {
      this.recipe = recipe;
      this.isOwner = user ? user._id === recipe._ownerId : false;
    });
  }

  like() {
    if (this.recipe && this.userService.user) {
      const recipeId = this.recipe._id;
      const userId = this.userService.user._id;

      this.recipesService.likeRecipe(recipeId, userId).subscribe(() => {
        this.isLiked = true;
        this.router.navigate([`/${recipeId}/details`]);
      });
    }
  }
}
