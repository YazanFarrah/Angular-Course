import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //simple input output example
  //here for the @Input that comes from the parent to the child

  currentItem: string;

  addItem(item: string) {
    this.currentItem = item;
  }

  //now recieving the data from child to parent

  items: string[] = [];

  addItemFromChild(childItem:string){
    this.items.push(childItem);
  }

  // serverElements = [{ type: 'server', name: 'TestServer', content: 'A test' }];

  // onServerAdded(serverData: { serverName: string; serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent,
  //   });
  // }

  // onBluePrintAdded(blueprintData: {
  //   serverName: string;
  //   serverContent: string;
  // }) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent,
  //   });
  // }
}
