import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  @Output() recipeClicked = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is test Recipe as a desciption field',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/3:2/w_3000,h_2000,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg'
    ),

    new Recipe(
      'Test Recipe',
      'This is test Recipe as a desciption field',
      'https://www.cookipedia.co.uk/wiki/images/d/d6/General_Tso%27s_chicken_recipe.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is test Recipe as a desciption field',
      'https://www.cookipedia.co.uk/wiki/images/d/d6/General_Tso%27s_chicken_recipe.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {
    this.recipeClicked.emit(this.recipes[0]);
  }

  onRecipeClick(recipe: Recipe) {
    this.recipeClicked.emit(recipe);
  }
}
