import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: ` <app-server></app-server> <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  stringInterpolation = 'String interpolation';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
}
