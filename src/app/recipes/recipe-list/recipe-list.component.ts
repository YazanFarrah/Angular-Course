import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Lemon Blueberry Cake',
      'Lemon cake and blueberry desc',
      'https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/2020_blueberry-lemon-cake_16986_600x600.jpg?ext=.jpg'
    ),
    
  ];
  
}
