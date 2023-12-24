import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent {
  //binding through alias to use this name instead of element if I wanted'srvElement'
  @Input('srvElement') element: { type: string; name: string; content: string };
}
