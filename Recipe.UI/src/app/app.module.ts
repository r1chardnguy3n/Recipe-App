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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CuisineComponent } from './pages/cuisine/cuisine.component';

// Material Angular
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { CategoryCuisineCardComponent } from './components/category-cuisine-card/category-cuisine-card.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'cuisine', component: CuisineComponent},
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
    UpdateRecipeComponent,
    CategoriesComponent,
    CuisineComponent,
    CategoryCuisineCardComponent,
    PageHeaderComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
