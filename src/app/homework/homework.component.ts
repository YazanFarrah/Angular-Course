import { Component } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrl: './homework.component.css',
})
export class HomeworkComponent {
  visibleParaghraph = false;
  logs = [];
  changeVisibility() {
    this.logs.push(this.logs.length + 1);
    this.visibleParaghraph = !this.visibleParaghraph;
  }

  getLogStyle(index: number) {
    return {
      backgroundColor: index > 4 ? 'blue' : 'transparent',
      color: index > 4 ? 'white' : 'black',
    };
  }
}
