import { Injectable } from "@angular/core";

@Injectable()// now here there's no need to add it, since I am not injecting
//another service inside of it, but it's recommended to add it tho by angular.

export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
