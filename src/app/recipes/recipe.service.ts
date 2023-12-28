import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Lemon Blueberry Cake',
      'Lemon cake and blueberry desc',
      'https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/2020_blueberry-lemon-cake_16986_600x600.jpg?ext=.jpg',
      [
        new Ingredient('Blueberry', 8),
        new Ingredient('Lemon', 5),
        new Ingredient('Flour', 1),
      ]
    ),
    new Recipe(
      'Red Velvet Cake',
      'Red Velvet Cake desc...',
      'https://static01.nyt.com/images/2014/03/24/dining/redvelevetcake/redvelevetcake-articleLarge-v3.jpg',
      [
        new Ingredient('Eggs', 2),
        new Ingredient('Vanilla', 1),
        new Ingredient('Buttermilk', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    //slice gets us a copy so we can't directly access recipes
    return this.recipes.slice();
  }

  // addIngredientsToShoppingList(ingredients: Ingredient[]) {
  //   this.shoppingListService.addIngredients(ingredients);
  // }
}
