import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Category } from '../models/category';
import { Cuisine } from '../models/cuisine';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private getRecipesUrl = "get-recipes";
  private getCategoriesUrl = "get-categories";
  private getCuisinesUrl = "get-cuisines";
  private postRecipeUrl = "post-recipe"
  constructor(private http: HttpClient){}

  // Get recipes
  public getRecipes() : Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`${environment.apiUrl}/${this.getRecipesUrl}`);
  }

  // Get categories
  public getCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiUrl}/${this.getCategoriesUrl}`);
  }

  //Get cuisines
  public getCuisines() : Observable<Cuisine[]>{
    return this.http.get<Cuisine[]>(`${environment.apiUrl}/${this.getCuisinesUrl}`);
  }

  // Add recipe
  public addRecipe(recipe: Recipe) : Observable<Recipe> {
    return this.http.post<Recipe>(`${environment.apiUrl}/${this.postRecipeUrl}`, recipe);
  }

}
