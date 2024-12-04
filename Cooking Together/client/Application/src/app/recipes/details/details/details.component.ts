import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../../types/recipe';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RecipesService } from '../../recipes.service';
import { UserService } from '../../../user/user.service';
import { combineLatest, Subscription } from 'rxjs';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { ErrorMsgService } from '../../../core/error-msg/error-msg.service';
import { ErrorMsgComponent } from '../../../core/error-msg/error-msg.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, LoaderComponent, ErrorMsgComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit, OnDestroy {
  recipe: Recipe | null = null;
  isOwner: boolean = false;
  isLiked: boolean = false;
  isLoading: boolean = true;
  hasError: boolean = false;

  private likeSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private userService: UserService,
    private router: Router,
    private errorMsgService: ErrorMsgService
  ) {
    this.errorMsgService.apiError$.subscribe((err) => {
      this.hasError = !!err;
    });
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['recipeId'];

    this.likeSubscription.add(
      combineLatest([
        this.recipesService.getRecipeById(id),
        this.userService.user$,
      ]).subscribe(([recipe, user]) => {
        this.recipe = recipe;
        this.isOwner = user ? user._id === recipe._ownerId : false;
        this.isLiked = recipe.likes.includes(user?._id || '');
        this.isLoading = false;
      })
    );

    this.likeSubscription.add(
      this.recipesService.likeUpdated$.subscribe(() => {
        this.recipesService.getRecipeById(id).subscribe((recipe) => {
          this.recipe = recipe;
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.likeSubscription.unsubscribe();
  }

  like() {
    if (this.recipe && this.userService.user) {
      const recipeId = this.recipe._id;
      const userId = this.userService.user._id;

      this.recipesService.likeRecipe(recipeId, userId).subscribe({
        next: () => {
          this.isLiked = true;
          this.hasError = false;
          this.errorMsgService.clearError();
        },
        error: () => {
          this.hasError = true;
        },
      });
    }
  }

  delRecipe() {
    this.recipesService.removeRecipe(this.recipe!._id).subscribe({
      next: () => {
        this.hasError = false;
        this.errorMsgService.clearError();
        this.router.navigate(['/catalog']);
      },
      error: () => {
        this.hasError = true;
      },
    });
  }
}
