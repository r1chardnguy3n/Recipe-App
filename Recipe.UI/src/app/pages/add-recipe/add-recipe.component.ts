import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Cuisine } from 'src/app/models/cuisine';
import { Ingredients } from 'src/app/models/ingredients';
import { Instructions } from 'src/app/models/instructions';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

declare function cloneInput(): void;

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent{
  @Input() recipe?: Recipe;
  @Output() recipeAdded = new EventEmitter<Recipe>();
  ingredient = new Ingredients();
  ingredientArray: Ingredients[] = [];
  instruction = new Instructions();
  instructionArray: Instructions[] = [];
  categories: Category[] = [];
  cuisines: Cuisine[] = [];

  constructor(private recipeServices: RecipeService){

  }

  ngOnInit() : void{
    this.ingredientArray.push(this.ingredient);
    this.instruction.step = (this.instructionArray.length + 1).toString();
    this.instructionArray.push(this.instruction);   
    this.recipe = new Recipe();

    this.recipeServices.getCategories()
    .subscribe((result: Category[]) => (this.categories = result));

    this.recipeServices.getCuisines()
    .subscribe((result: Cuisine[]) => (this.cuisines = result));
  }

  addRecipe(recipe: Recipe){
    recipe.ingredients = this.ingredientArray;
    recipe.instructions = this.instructionArray;
    console.log(this.ingredientArray);
    console.log(this.instructionArray);
    console.log(this.recipe);
    /*
    recipe.ingredients = this.ingredients;

    this.recipeServices.addRecipe(recipe)
    .subscribe((addedRecipe : Recipe) => this.recipeAdded.emit(addedRecipe)); 
    */
  }

  // this function will create an additional input to add ingredients
  addIngredient(){
    this.ingredient = new Ingredients();
    this.ingredientArray.push(this.ingredient);
  }

  // this function will remove input for adding ingredients
  removeIngredient(index : number){
    this.ingredientArray.splice(index, 1);
  }

  // this function will create an additional input to add instructions
  addInstruction(){
    this.instruction = new Instructions();
    this.instruction.step = (this.instructionArray.length + 1).toString();
    this.instructionArray.push(this.instruction);
  }

  // this function will remove input for adding instructions
  removeInstruction(index : number){
    this.instructionArray.splice(index, 1);
  }
  
}
