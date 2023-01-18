import { Component } from '@angular/core';
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

  constructor(private recipeServices: RecipeService){}

  ngOnInit() : void{
    this.recipeServices.getRecipes()
    .subscribe((result: Recipe[]) => (this.recipes = result));

    console.log(this.recipes);
  }
}
