import { Component } from '@angular/core';
//translation

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loadedFeature ='recipe';


  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  
}
