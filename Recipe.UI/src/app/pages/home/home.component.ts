import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Cuisine } from 'src/app/models/cuisine';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
