import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  
  categories: Category[] = [];

  constructor(private recipeServices: RecipeService){}

  ngOnInit() : void{
    this.recipeServices.getCategories()
    .subscribe((result: Category[]) => (this.categories = result));
  }
}
