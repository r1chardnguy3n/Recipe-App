import { Component } from '@angular/core';
import { Category } from './models/category';
import { Cuisine } from './models/cuisine';
import { Recipe } from './models/recipe';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipe.UI';
  recipes: Recipe[] = [];
  categories: Category[] = [];
  cuisines: Cuisine[] = [];

  constructor(private recipeServices: RecipeService){}

  ngOnInit() : void{

    this.recipeServices.getRecipes()
    .subscribe((result: Recipe[]) => (this.recipes = result));

    this.recipeServices.getCategories()
    .subscribe((result: Category[]) => (this.categories = result));

    this.recipeServices.getCuisines()
    .subscribe((result: Cuisine[]) => (this.cuisines = result));

  }
}
