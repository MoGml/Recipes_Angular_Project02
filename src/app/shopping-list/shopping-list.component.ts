import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../Shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('kaza', 10),
    new Ingredients('kaza', 10),
    new Ingredients('kaza', 10),
  ];

  constructor() {}

  ngOnInit(): void {}
}
