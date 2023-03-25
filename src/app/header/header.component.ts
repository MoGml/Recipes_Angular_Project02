import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() headerClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onShoppingListClick() {
    this.headerClicked.emit('list');
  }

  onRecipeClick() {
    this.headerClicked.emit('recipe');
  }
}
