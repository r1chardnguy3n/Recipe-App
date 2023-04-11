import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Cuisine } from 'src/app/models/cuisine';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.scss']
})
export class CuisineComponent {
  cuisines: Cuisine[] = [];

  constructor(private recipeServices: RecipeService){}

  ngOnInit() : void{
    this.recipeServices.getCuisines()
    .subscribe((result: Cuisine[]) => (this.cuisines = result));
  }
}
