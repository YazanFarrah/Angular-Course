import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  selectedFeature = 'recipe';

  onSelect(feature: string) {
    this.selectedFeature = feature;
    this.featureSelected.emit(feature);
  }
}
