import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
})
export class InputOutputComponent {
  //item value comes from parent
  @Input() item: string;

  @Output('itemFromChild') newItemEvent = new EventEmitter<string>();

  addNewItemToParent(inputElement: HTMLInputElement) {
    const value = inputElement.value
    this.newItemEvent.emit(value);
    inputElement.value = '';
    
  }
}
