import { Component } from '@angular/core';
//translation
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loadedFeature ='recipe';

  constructor(private translateService: TranslateService) {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  translate(event: any) {
    this.translateService.use(event.target.value);
  }
}
