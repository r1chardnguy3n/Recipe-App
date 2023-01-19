import { Ingredients } from './ingredients';
import { Instructions } from './instructions';
import { RecipeCategory } from './recipe-category';
import { RecipeCuisine } from './recipe-cuisine';
export class Recipe{
    id?: number;
    name: string = "";
    description: string  = "";
    notes?: string =  "";
    image?: string  = "";
    ingredients?: Ingredients[] = [];
    instructions?: Instructions[] = [];
    recipeCategory?: RecipeCategory[] = [];
    recipeCuisine?: RecipeCuisine[] = [];
}