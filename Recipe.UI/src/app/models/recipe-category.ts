import { Category } from "./category";
import { Recipe } from "./recipe";

export class RecipeCategory{
    recipeId?: number;
    recipe: Recipe = new Recipe();

    categoryId?: number;
    category: Category = new Category();
}