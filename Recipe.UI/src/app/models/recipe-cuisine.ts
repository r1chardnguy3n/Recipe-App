import { Cuisine } from "./cuisine";
import { Recipe } from "./recipe";

export class RecipeCuisine{
    recipeId?: number;
    recipe: Recipe = new Recipe();

    cuisineId?: number;
    cuisine: Cuisine = new Cuisine();
}