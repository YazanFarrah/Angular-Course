import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { ToastService } from '../../toast-message.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(
    private shoppingListService: ShoppingListService,
    private toast: ToastService
  ) {}

  onAddItem() {
    let ingredientName = this.nameInputRef.nativeElement.value;
    let ingredientAmount = +this.amountInputRef.nativeElement.value;

    if (!ingredientName && ingredientAmount === 0) {
      return this.toast.showWarn("Name and Amount can't be empty");
    }

    if (!ingredientName || ingredientAmount === 0) {
      const message = !ingredientName
        ? "Name can't be empty"
        : "Amount can't be empty";

      this.toast.showWarn(message);
      return;
    }
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingListService.addIngredient(newIngredient);
  
  }
}
