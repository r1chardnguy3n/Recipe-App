import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeService } from './services/recipe.service';
import { HomeComponent } from './pages/home/home.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { UpdateRecipeComponent } from './pages/update-recipe/update-recipe.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'add-recipe', component: AddRecipeComponent},
  {path: 'update-recipe', component: UpdateRecipeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    AddRecipeComponent,
    UpdateRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
