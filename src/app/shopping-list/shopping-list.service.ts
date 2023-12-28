import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  // addIngredients(ingredients: Ingredient[]) {
  //   //may be better approach with for
  //   // for (let ingredient of ingredients) {
  //   //   this.addIngredient(ingredient);
  //   // }
  //   //alternative

  //   this.ingredients.push(...ingredients);
  //   this.ingredientsChanged.emit(this.ingredients.slice());
  // }

  addIngredients(ingredients: Ingredient[]) {
    for (const ingredient of ingredients) {
      const index = this.ingredients.findIndex(
        (i) => i.name === ingredient.name
      );

      if (index > -1) {
        // Ingredient already exists, update the amount
        this.ingredients[index].amount += ingredient.amount;
      } else {
        // Ingredient doesn't exist, add a copy to the list
        this.ingredients.push(
          new Ingredient(ingredient.name, ingredient.amount)
        );
      }
    }

    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
