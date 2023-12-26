import { Component } from '@angular/core';
import { LoggingService } from '../shared/services/logging.service';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // add providers so angular knows we want to use this as a service and have instance of it
  //better to use this than create the instance manually, this way angular knows how the app works
  // providers: [LoggingService],
  //here I didn't add AccountService so it doesn't create a new instance
  //since I am looping over the accounts in app.component.module and
  //if I add it here, it won't be the same instance that I need in the
  //app component "the parent"
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {
    this.accountService.statusUpdated.subscribe((status: string) =>
      alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
