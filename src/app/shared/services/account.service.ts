import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

//since here we're injecting LoggingService inside of account service,
//we have to add @Injectable(), but don't need to inside components
//or directives since they already have metadata

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    const newAccount = { name, status };
    this.accounts.push(newAccount);
    this.loggingService.logStatusChange(status);

  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }
}
