import { Component } from '@angular/core';
//translation
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private translateService: TranslateService) {}

  translate(event: any) {
    this.translateService.use(event.target.value);
  }
}
