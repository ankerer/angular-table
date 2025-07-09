import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { USERS } from '../mock-data/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUsers(options?: { limit?: number, offset?: number }) {
    const limit = options?.limit || USERS.length;
    const offset = options?.offset || 0;

    console.log(`Fetching ${limit} users from offset ${offset}`);
    return of(USERS.slice(offset, offset + limit)).pipe(delay(200));
  }
}
