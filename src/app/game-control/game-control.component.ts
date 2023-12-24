import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 1;
  isStarted = false;

  onStartGame() {
    if (this.isStarted) {
      return;
    }
    this.isStarted = true;
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    this.isStarted = false;
    clearInterval(this.interval);
  }

  onStopGame() {
    this.isStarted = false;
    clearInterval(this.interval);
    this.lastNumber = 1;
  }
}
