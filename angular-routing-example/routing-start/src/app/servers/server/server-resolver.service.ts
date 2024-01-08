//if we wanted to fetch the data before the page is displayed
//otherwise we can use a normal spinner until the data is fetched

import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';

interface Server {
  id: number;
  name: string;
  status: string;
}

export const serverResolver: ResolveFn<Server> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Server> | Promise<Server> | Server => {
  return inject(ServersService).getServer(+route.params['id']);
};
