import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private url = "get-recipes";
  constructor(private http: HttpClient){}

  public getRecipes() : Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`${environment.apiUrl}/${this.url}`);
  }
}
