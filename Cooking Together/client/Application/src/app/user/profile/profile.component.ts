import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../types/recipe';
import { ProfileDetails } from '../../types/user';

import { UserService } from '../user.service';
import { ErrorMsgService } from '../../core/error-msg/error-msg.service';

import { ErrorMsgComponent } from '../../core/error-msg/error-msg.component';
import { RecipesService } from '../../recipes/recipes.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RecipeComponent } from '../../recipes/recipe/recipe.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ErrorMsgComponent, LoaderComponent, RecipeComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  isLoading: boolean = true;
  hasError: boolean = false;
  profileRecipes: Recipe[] = [];
  profileLikedRecipes: Recipe[] = [];
  profileDetails: ProfileDetails = {
    username: '',
    email: '',
  };

  constructor(
    private userService: UserService,
    private errorMsgService: ErrorMsgService,
    private recipesService: RecipesService
  ) {
    this.errorMsgService.apiError$.subscribe((err) => {
      this.hasError = !!err;
    });
  }

  ngOnInit(): void {
    this.userService.user$.subscribe({
      next: (user) => {
        if (user) {
          this.hasError = false;
          this.errorMsgService.clearError();
          const { _id, username, email, password } = user!;
          this.profileDetails = { username, email };

          this.userRecipes();
          this.likedRecipes();
        }
      },
      error: () => {
        this.hasError = true;
      },
    });
  }

  likedRecipes() {
    this.recipesService.getProfileLikedRecipe().subscribe({
      next: (recipes) => {
        this.hasError = false;
        this.errorMsgService.clearError();
        this.profileLikedRecipes = recipes;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      },
    });
  }

  userRecipes() {
    this.recipesService.getProfileRecipe().subscribe({
      next: (recipes) => {
        this.hasError = false;
        this.errorMsgService.clearError();
        this.profileRecipes = recipes;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      },
    });
  }
}
