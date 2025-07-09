import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { USERS } from '../mock-data/users';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all users by default', (done) => {
    service.getUsers().subscribe(users => {
      expect(users.length).toBe(USERS.length);
      expect(users).toEqual(USERS);
      done();
    });
  });

  it('should return limited users', (done) => {
    const limit = 5;
    service.getUsers({ limit }).subscribe(users => {
      expect(users.length).toBe(limit);
      expect(users).toEqual(USERS.slice(0, limit));
      done();
    });
  });

  it('should return users with offset', (done) => {
    const offset = 5;
    const limit = 5;
    service.getUsers({ limit, offset }).subscribe(users => {
      expect(users.length).toBe(limit);
      expect(users).toEqual(USERS.slice(offset, offset + limit));
      done();
    });
  });
});
