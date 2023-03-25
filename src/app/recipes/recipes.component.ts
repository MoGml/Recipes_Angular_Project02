import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  clickedRecipe: Recipe;

  onRecipeClicked(recipe: Recipe) {
    this.clickedRecipe = recipe;
    console.log(recipe);
  }

  constructor() {}

  ngOnInit(): void {}
}
